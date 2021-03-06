import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

// width="853"
// height="480"

const breakpoints = [830, 1200, 1500];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const videoSize = css({
  width: '90%',
  height: '100%',
  [mq[0]]: {
    //responsive smallest
  },
  [mq[1]]: {
    //responsive middle size
    width: '90%',
    height: '95%',
  },
});

const titleVideo = css({
  backgroundColor: 'black',
  width: '87.5%',
  paddingLeft: '1em',
  [mq[0]]: {
    //responsive smallest
  },
  [mq[1]]: {
    //responsive middle size
  },
});

const style = {
  '@keyframes appear': {
    '0%': {
      opacity: '0%',
    },
    '100%': {
      opacity: '100%',
    },
  },

  position: 'absolute' as 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '50%',
  margin: 'auto',
  bgcolor: 'background.black',
  backgroundPosition: 'center',
  border: '2px solid #000',
  boxShadow: 24,
  color: 'white',
  p: 4,
  animation: '0.25s ease-out 0s 1 appear',
  [mq[0]]: {
    //responsive smallest
  },
  [mq[1]]: {
    //responsive middle size
    transform: 'translate(-50%, -50%)',
  },
};

interface MultimediaModalProps {
  videoInfo: VideoData;
  open: boolean;
  handleClose: () => void;
}

const MultimediaModal: React.FC<MultimediaModalProps> = ({
  videoInfo,
  open,
  handleClose,
}) => {
  const getVideoEmbedLink = (link: string): string => {
    const regEx =
      '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)';
    const youtubeID = link.match(regEx);
    if (youtubeID) {
      const embedLink = 'https://www.youtube.com/embed/' + youtubeID[1];
      return embedLink;
    }
    return '';
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box sx={style}>
          <iframe
            width="750"
            height="430"
            src={getVideoEmbedLink(videoInfo.link)}
            css={videoSize}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />

          <div css={titleVideo}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {videoInfo.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {videoInfo.description}
            </Typography>
            <Button id="close" onClick={() => handleClose()}>
              Close
            </Button>
          </div>
        </Box>
      </div>
    </Modal>
  );
};

export default MultimediaModal;
