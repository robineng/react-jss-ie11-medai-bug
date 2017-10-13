import React from 'react'
import injectSheet, {ThemeProvider} from 'react-jss'

const buttonStyles = ({
  button: {
    backgroundColor: ({ toggled }) => toggled ? 'green' : 'blue',
    '@media only screen and (min-width: 500px)': {
      backgroundColor: ({ toggled }) => toggled ? 'red' : 'white'
    }
  }
});

const Button = ({ toggled, callback, classes }) => (
  <button className={classes.button} onClick={callback}>
    { toggled ? 'toggled' : 'not toggled'}
  </button>
)

const StyledButton = injectSheet(buttonStyles)(Button)

const containerStyles = (theme) => ({
  wrapper: {
    padding: 40
  }
})

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    };
  }

  render() {
    const { classes } = this.props;
    const { toggled } = this.state;

    return (
      <div className={classes.wrapper}>
        <StyledButton
          toggled={toggled}
          callback={() => this.setState({ toggled: !this.state.toggled })}
        />
      </div>
    )
  }
}

const StyledContainer = injectSheet(containerStyles)(Container)

export default () => (
  <ThemeProvider theme={{a: 1}}>
    <StyledContainer />
  </ThemeProvider>
)


