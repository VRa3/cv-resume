export const theme = {
    colors: {
        primary: "#50a3a2",
        secondary: "#2eca7f",
        backgroundLike: "#1b83f4",
        font: "#232323",
        transparentWhite: "rgba(255,255,255,0.3)",
        transparentGray: "rgba(40,40,40,0.3)",
        gradients: {
            grayToPrimary: "rgba(40,40,40,0.3), #50a3a2",
            whiteToPrimary: "rgba(255,255,255,0.3), #50a3a2",
            whiteToPrimaryLighter: "rgba(255,255,255,0.3), rgba(80, 163, 162, 0.5)",
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
};