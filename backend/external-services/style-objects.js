// A collection of style objects for pug email-templates to use during complication.
const colors = {
  highlight: '#C7FCA4',
  text_0: '#0D0D0D',
  text_1: '#595959',
  background_0: '#F2F2F2'
}


const titleHeading = {
  'display': 'block',
  'font-size': '16px',
  'font-weight': 'bold',
  'padding': '10px',
  'margin-bottom': '20px'
}

const contentContainer = {
  'display': 'block',
  'padding': '10px',
  'font-size': '14px',
  'color': colors.text_1
}

const label = {
  'display': 'inline-block',
  'font-weight': 'bold',
  'cursor': 'initial',
  color: colors.text_0
}

module.exports = {
  titleHeading,
  contentContainer,
  label
}
