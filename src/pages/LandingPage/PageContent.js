import React from 'react'
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  TrackChanges,
  FileCopy } from '@material-ui/icons';
import {
  Tooltip,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button } from '@material-ui/core'
import {
  withStyles,
  lighten,
  darken } from '@material-ui/core/styles'

  const LightTooltip = withStyles((theme) => {
  const getBackgroundColor = theme.palette.type === 'light' ? lighten : darken;
  return {
tooltip: {
  ...theme.typography.body2,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  padding: '6px 10px',
  backgroundColor: getBackgroundColor(theme.palette.success.main, 0.1),
}
}})(Tooltip);

const PackageCard = ({ title, command, description, icons }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card elevation={4} style={{ margin: 18, maxWidth: 350 }}>
      <CardContent>
        {icons}
        <br />
        <Typography gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <br />
        <Typography variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const PageContent = ({ setComponents }) => {
  return (
    <React.Fragment>
      <div style={{ height: 20 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        A resource for the people, by the people
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        By using our machine learning algorithm, you can predict whether you are at risk of stroke as well as contribute to a growing dataset freely accessible to everyone 
      </Typography>
      <div style={{ height: 30 }} />

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <PackageCard
          title={'Predict'}
          description={
            'Input information such as your gender, your work type and your body mass index and our machine learning algorithm will predict whether or not you are at risk of stroke.'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="predict.svg"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
        <PackageCard
          title={'Contribute'}
          description={
            'By doing a prediction, not only are you finding out if you are at risk of stroke, but you will be helping improve the algorithm as well as contributing to a growing dataset for stroke research.'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="contribute.svg"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
        <PackageCard
          title={'Prevent'}
          description={
            'Researches specialized on stroke research will benefit from having a free and easily accessible store of data as well as a repository of links to the most relevant sources on strokes.'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src="prevent.svg"
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
        
      </div>
      <div style={{ height: 30 }} />
      <div
        ref={(r) => {
          if (r) {
            setComponents(r)
          }
        }}
        style={{
          //height: 400,
          backgroundColor: '#2D2D2D',
          backgroundImage: 'radial-gradient( #4F4F4F,#242424)',
        }}
      >
        <div style={{ height: 30 }} />
        <Typography
          variant="h3"
          //color="textSecondary"
          style={{ margin: 16, textAlign: 'center', color: 'white' }}
        >
          Contribute to the project.
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          Fully open source. Forever.
        </Typography>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
        <img src={'./github.png'} alt="github" />
        </div>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          We are redefining the concept of open source by not only making the code publicly accessible, but by making the data open to everyone.
          By making the data fully transparent the dataset can become a powerful tool for stroke research everywhere in years to come.
        </Typography>
        <div style={{ height: 50 }} />
      </div>

      <div style={{ height: 30 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
      Research
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Find out more about strokes and their effects <a href="https://www.cdc.gov/stroke/index.htm">here</a>.
        Consider Donating to the stroke foundation <a href="https://strokefoundation.org.au/">here</a>.

      </Typography>
      <div style={{ height: 30 }} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <img src="heart.svg" alt="react" style={{ width: 150 }} />
 
      </div>
      <div style={{ height: 50 }} />
    </React.Fragment>
  )
}

export default PageContent
