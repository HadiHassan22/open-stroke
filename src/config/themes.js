import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'

const themes = [
  {
    id: 'default',
    source: {
      palette: {
        primary: { main: '#212121' },
        secondary: {
          main: '#f47b00',
        },
      },
    },
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: { main: '#212121'},
        secondary: {main: '#f47b00'},
        error: red,
      },
    },
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
      },
    },
  },
  {
    id: 'standard',
    source: {
      palette: {
        primary: { main: '#212121' },
        secondary: {
          main: '#f47b00',
        },
      },
    },
  },
]

export default themes
