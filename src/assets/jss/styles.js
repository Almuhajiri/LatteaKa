const colorPrimary = ['#3C3D6F']
const colorSecondary = ['#FD8F5F']
const colorWhite = ['#FFFFFF']
const colorBlack = ['#000000']
const colorGray = ['#F5F4F9']

const black = { fontWeight: '900' }
const bold = { fontWeight: 'bold' }
const semiBold = { fontWeight: '600' }
const reguler = { fontWeight: 'normal' }
const light = { fontWeight: '300' }

// font default
const fontDefault = {
    fontFamily: '"Nunito Sans", sans-serif',
    letterSpacing: "0.04em"
}

// font style
const fontPrimary = {
    ...fontDefault,
    fontSize: '40px',
    fontWeight: bold,
    textTransform: 'capitalize',
}
const fontSecondary = {
    ...fontDefault,
    fontSize: '14px',
    fontWeight: reguler,
}

export {
    colorPrimary,
    colorSecondary,
    colorWhite,
    colorBlack,
    colorGray,
    black,
    bold,
    semiBold,
    reguler,
    light,
    fontDefault,
    fontPrimary,
    fontSecondary

}