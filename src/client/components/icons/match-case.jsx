import Icon from '@ant-design/icons'

// from https://icon-sets.iconify.design/codicon/case-sensitive/
const matchCaseSvg = () => (
  <svg width='1em' height='1em' viewBox='0 0 16 16'>
    <path fill='currentColor' d='M8.854 11.702h-1l-.816-2.159H3.772l-.768 2.16H2L4.954 4h.935l2.965 7.702Zm-2.111-2.97L5.534 5.45a3.142 3.142 0 0 1-.118-.515h-.021c-.036.218-.077.39-.124.515L4.073 8.732h2.67Zm7.013 2.97h-.88v-.86h-.022c-.383.66-.947.99-1.692.99c-.548 0-.978-.146-1.29-.436c-.307-.29-.461-.675-.461-1.155c0-1.027.605-1.625 1.815-1.794l1.65-.23c0-.935-.379-1.403-1.134-1.403c-.663 0-1.26.226-1.794.677V6.59c.54-.344 1.164-.516 1.87-.516c1.292 0 1.938.684 1.938 2.052v3.577Zm-.88-2.782l-1.327.183c-.409.057-.717.159-.924.306c-.208.143-.312.399-.312.768c0 .268.095.489.285.66c.193.169.45.253.768.253a1.41 1.41 0 0 0 1.08-.457c.286-.308.43-.696.43-1.165V8.92Z' />
  </svg>
)

export const MatchCaseIcon = props => <Icon component={matchCaseSvg} {...props} />
