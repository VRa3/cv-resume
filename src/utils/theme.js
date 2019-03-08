export const theme = {
    colors: {
        primary: "rgb(80,163,162)",
        secondary: "rgb(46,202,127)",
        backgroundLike: "rgb(27, 131, 244)",
        font: "rgb(35, 35, 35)",
        fontLighter: "rgb(112,112,112)",
        gradients: {
            grayToPrimary: "rgba(40,40,40,0.3), rgb(80, 163, 162)",
            whiteToPrimary: "rgba(255,255,255,0.3), rgb(80, 163, 162)",
            whiteToPrimaryLighter: "rgba(255,255,255,0.3), rgba(80, 163, 162, 0.5)",
            grayToTransparent: "rgba(255,255,255,0.3), rgba(40,40,40,0.3)",
            primaryToTransparent: "rgb(80, 163, 162), rgba(255,255,255,0.3)",
            secondaryToTransparent: "rgb(46, 202, 127), rgba(255,255,255,0.3)",
        },
        transparent: {
            transparentPrimary: "rgba(80,163,162,0.15)",
            transparentWhite: "rgba(255,255,255,0.3)",
            transparentGray: "rgba(40,40,40,0.3)",
        }
    },
    mediaUp: {
        sm: '@media (min-width: 576px)',
        md: '@media (min-width: 768px)',
        lg: '@media (min-width: 992px)',
        xl: '@media (min-width: 1200px)',
        xxl: '@media (min-width: 1600px)',
    },
    mediaDown: {
        sm: '@media (max-width: 575px)',
        md: '@media (max-width: 767px)',
        lg: '@media (max-width: 991px)',
        xl: '@media (max-width: 1199px)',
        xxl: '@media (max-width: 1599px)',
    },
    scrollBar: `
    .simplebar-scrollbar::before {
        background: rgb(112,112,112);
    }
    .simplebar-track.simplebar-vertical {
        padding-top: 10px;
        height: calc(100% - 20px);
    }
    .simplebar-track {
        right: 5px;
    }
    .simplebar-track.simplebar-horizontal {
        display: none;
    }
    `,
};