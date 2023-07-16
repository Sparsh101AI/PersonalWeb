import { Container } from "react-bootstrap";
import 'animate.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import './myjourney.css'

export const Myjourney = () => {
  


  

 

  return (
    <section className="timeline" id="timeline">
      <Container  className = "stars">
      <h2 className="myjourney">My Journey</h2>
      
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
     
        >
        May 19th, 2020
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <ScienceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Canada Wide Science Fair          </Typography>
          <Typography> Recieved a ribbon for being best project in my region. The goal of the
            project was to create an AI powered clean energy prevention tool uzing piezoelectric sensors and wind!
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
         
        >
          March 2th - June 22th, 2021
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Centre Of Hope Full Stack Internship 
          </Typography>
          <Typography>Led a team of 4 indivudals to imrpove both the backend/frontend of the website using React Js.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          
        >
        August 12th, 2021
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <ScienceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          INSPO North Continental Research and Innovation Fair
          </Typography>
          <Typography>Invited to INSPO based of virutal Canada Wide Science Fiar results for my brainwave detection project.
            I was named as the top 100 youth innovators across North America out of the 700+ participants! Also Recieved one of two SHAD scholarships for Canadians and a TKS scholarships, along with schloarshipts to NYC and RIT. </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        
        >
November 11th, 2022 </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <PrecisionManufacturingIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
        Vex Skills Canada
          
          </Typography>
          <Typography> Ranked top 4 in Canada for Vex robotics skills based of our skills score. Won the Wood Buffalo Vex Regional Championships and won the skills award.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
         
        >
          March 12th, 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          University Accpetence
          </Typography>
          <Typography>Accpeted into the University of Waterloo's Software Engineering program</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
    
        >
May 5th-8th, 2022 </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <PrecisionManufacturingIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           Vex World Championships
          
          </Typography>
          <Typography>Had the chance to participate in the biggest robotoics competition in the world in Dallas, Texas.
            Participated and finished high in the innovate division. Connected with indivudals from the USA, UK, France, Japan, South Korea and many more!</Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
       
        >
          May 17th-19th, 2022
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <ScienceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Canada Wide Science Fair
          </Typography>
          <Typography>Awarded Top 4 innovate projects at the fair alongside a senior silver medal, innvation to York Universities 2023 Summer Exclusive Tect Event and numerous scholarships for my project FOUCS.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          
        >
          June 29th, 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Highschool Graduation
          </Typography>
          <Typography>12 years of education passed by, however there is still more left. Said my goodbyes, however most of my likeminded friends are also attending the same University.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
         
        >
          July 5th - August 25th, 2022
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          UofA Software Development Internship
          </Typography>
          <Typography>Spent my summer working at the University of Alberta Under Professor Paul Lu and his team to develop a visually playable spinoff game from the famous word game
            wordle.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          
        >
          September 8th - April 28th, 2022
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          My first year At the University Of Waterloo
          </Typography>
          <Typography>Tough. I found it difficult, but overtime I learned good management and
            orgnaizational skills. Met an outstanding group of friends as well!
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.orim"
        >
          May 8th - August 30th, 2023
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot >
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          Momento AI Software Development Internship (Co-op #1)
          </Typography>
          <Typography>Spent my summer working at a startup in Califronia buildilng an AI recomendations engine using the OPEN AI API.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
    

      </Container>
    </section>
  )
}