import { useEffect, useRef, useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";
import { answer, SUGGESTIONS, WELCOME } from "./brain";
import "./Chat.css";

export function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ from: "bot", text: WELCOME, suggestions: SUGGESTIONS }]);
  const [teaser, setTeaser] = useState(false);

  // a little speech bubble after a moment, once per visit, so people notice the bot
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("bot-teaser") === "1"; } catch (e) {}
    if (seen) return;
    const t = setTimeout(() => setTeaser(true), 2500);
    return () => clearTimeout(t);
  }, []);
  const dismissTeaser = () => {
    setTeaser(false);
    try { sessionStorage.setItem("bot-teaser", "1"); } catch (e) {}
  };
  const toggle = () => { dismissTeaser(); setOpen(!open); };
  const listRef = useRef(null);
  const inputRef = useRef(null);

  // keep the newest message in view
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  // focus the box when opened, close on Escape
  useEffect(() => {
    if (!open) return;
    inputRef.current && inputRef.current.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (text) => {
    const q = text.trim();
    if (!q) return;
    setInput("");
    setMessages((m) => [...m, { from: "you", text: q }]);
    // short pause so the reply feels like a reply
    setTimeout(() => setMessages((m) => [...m, { from: "bot", ...answer(q) }]), 350 + Math.random() * 300);
  };

  return (
    <>
      <div className={`chat__teaser ${teaser && !open ? "is-visible" : ""}`} aria-hidden={!teaser || open}>
        <button className="chat__teaser-close" onClick={dismissTeaser} aria-label="Dismiss" tabIndex={teaser && !open ? 0 : -1}>
          <FiX />
        </button>
        <p>Hi! I'm Sparsh's bot. Ask me anything about him.</p>
      </div>

      <button
        className={`chat__fab ${open ? "is-open" : ""}`}
        onClick={toggle}
        aria-expanded={open}
        aria-controls="site-chat"
        aria-label={open ? "Close chat" : "Chat with Sparsh's bot"}
      >
        <span className="chat__fab-ring" aria-hidden="true" />
        {open ? <FiX /> : <BsRobot />}
      </button>

      <section id="site-chat" className={`chat ${open ? "is-open" : ""}`} aria-label="Chat about Sparsh" aria-hidden={!open}>
        <header className="chat__head">
          <span className="chat__avatar" aria-hidden="true">
            <BsRobot />
            <span className="chat__status" />
          </span>
          <p className="chat__title">Sparsh's bot</p>
        </header>

        <div className="chat__list" ref={listRef} aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`msg msg--${m.from}`}>
              {m.from === "bot" && (
                <span className="msg__avatar" aria-hidden="true">
                  <BsRobot />
                </span>
              )}
              <div className="msg__bubble">
                {m.text.split("\n").map((line, j) =>
                  line.startsWith("• ") ? (
                    <p key={j} className="msg__li">{line.slice(2)}</p>
                  ) : line === "" ? (
                    <br key={j} />
                  ) : (
                    <p key={j}>{line}</p>
                  )
                )}
              </div>
              {m.suggestions && (
                <div className="chat__chips">
                  {m.suggestions.map((s) => (
                    <button key={s} className="chip" onClick={() => send(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <form
          className="chat__form"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            ref={inputRef}
            className="chat__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            aria-label="Your question"
            autoComplete="off"
            maxLength={200}
          />
          <button className="chat__send" type="submit" aria-label="Send" disabled={!input.trim()}>
            <FiSend />
          </button>
        </form>
      </section>
    </>
  );
}
