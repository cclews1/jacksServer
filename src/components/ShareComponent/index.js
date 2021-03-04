import { useState, useEffect } from 'react';
import {
  ListItemText,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  Fade,
} from '@material-ui/core';
import { Share, Facebook, Email, FileCopy } from '@material-ui/icons';

export default function ShareComponent({ car }) {
  const [handleShare, setHandleShare] = useState();
  const [desktopLinks, setDesktopLinks] = useState({});
  const [anchor, setAnchor] = useState(null);

  function desktopShare(e) {
    setAnchor(e.currentTarget);
  }

  function handleClose() {
    setAnchor(null);
  }

  useEffect(() => {
    if (isMobile()) {
      setHandleShare(() => mobileShare);
    } else {
      setHandleShare(() => desktopShare);
      setDesktopLinks({
        mailto: `mailto:?subject=Check%20out%20this%20${car.year}%20${car.make}%20${car.model}%20at%20Jacks%20Auto%20Sales&body=Link%3A%20https%3A%2F%2F${window.location.hostname}%2Finventory%2f${car.id}`,
        facebook: `https://www.facebook.com/sharer.php?u=https://${window.location.hostname}/inventory/${car.id}`,
      });
    }
  }, []);
  return (
    <>
      <IconButton onClick={(e) => handleShare(e, car)}>
        <Share />
      </IconButton>
      <Menu
        anchorEl={anchor}
        keepMounted
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={Boolean(anchor)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <ShareButton
          icon={<Facebook />}
          isAnchor
          label='Share on Facebook'
          href={desktopLinks.facebook}
        />
        <ShareButton
          icon={<Email />}
          isAnchor
          label='Share by Email'
          href={desktopLinks.mailto}
        />
        <ShareButton
          icon={<FileCopy />}
          label='Copy to Clipboard'
          onClick={(e) => copyText(e, car.id)}
        />
      </Menu>
    </>
  );

  function ShareButton({ icon, label, isAnchor, ...otherProps }) {
    return (
      <MenuItem dense component={isAnchor && 'a'} {...otherProps}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </MenuItem>
    );
  }

  function copyText(e, carId) {
    e.preventDefault();
    navigator.clipboard.writeText(
      window.location.hostname + '/inventory/' + carId
    );
  }

  function mobileShare(e, car) {
    if (navigator.share) {
      navigator
        .share({
          title: `${car.make} ${car.model} | Jacks Auto Sales | 410-355-3576`,
          text: `${car.make} ${car.model} | Jacks Auto Sales | 410-355-3576`,
          url: `/inventory/${car.id}`,
        })
        .then(() => console.log('Successful share!'))
        .catch((err) => console.log('Error sharing.'));
    } else {
    }
  }

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
}
