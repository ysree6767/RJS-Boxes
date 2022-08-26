const Box = (props) => {
  //  Write your code here.
  const { text, className } = props
  return (
    <div className={className}>
      <p className='box-name'>{text} </p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1> Boxes</h1>
    <div className='item-container'>
      <Box text='Small' className='small-box' />
      <Box text='Medium' className='medium-box' />
      <Box text='Large' className='large-box' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
