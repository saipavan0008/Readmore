// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Heading,
  SmallPera,
  ImageContainer,
  ButtonEl,
  Pera,
} from './styledComponents'

const ReadMore = props => {
  const [isClicked, setterValue] = useState(false)
  const [isButton, setterBut] = useState(false)
  //   console.log(props)
  const {reactHooksDescription} = props
  const part = reactHooksDescription.slice(0, 170)

  const onClickButton = () => {
    setterValue(!isClicked)
    setterBut(!isButton)
  }

  const description = isClicked ? reactHooksDescription : part
  const but = isButton ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <SmallPera>Hooks are a new addition to React</SmallPera>
      <ImageContainer
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Pera>{description}</Pera>
      <ButtonEl onClick={onClickButton} type="button">
        {but}
      </ButtonEl>
    </MainContainer>
  )
}

export default ReadMore
