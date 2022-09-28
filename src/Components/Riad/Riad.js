import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';

function Riad() {
  return (
    <>
    {[
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
        This is a {variant} alert—check it out!
      </Alert>
    ))}
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
     Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
   </Button>
 </Stack>
  </>


//     <div>
//         
//     </div>
  )
}

export default Riad