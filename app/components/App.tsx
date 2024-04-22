import React, { FC } from 'react';

interface appProps {
  name: String
}

const App: FC<appProps> = (props) => {
  return(
    <div>Your first meta react app - 10 {props.name}</div>
  )
}

export default App;
