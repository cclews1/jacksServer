import { Slide, useScrollTrigger, useTheme } from '@material-ui/core';

export default function HideOnScroll(props) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger || props.disable}>
      {props.children}
    </Slide>
  );
}
