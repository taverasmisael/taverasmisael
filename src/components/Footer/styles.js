import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = isDark =>
  makeStyles(theme => ({
    root: {
      color: isDark
        ? theme.palette.primary.contrastText
        : theme.palette.primary.dark,
      marginBottom: '1rem',
    },
    socialIcon: {
      color: isDark
        ? theme.palette.primary.contrastText
        : theme.palette.primary.dark,
      width: '1.25rem',
    },

    disabled: {
      '&[aria-disabled="true"] svg': {
        color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
      },
    },

    copy: {
      fontSize: 10,
      marginTop: 0,
    },

    socialIconContainer: {
      textAlign: 'center',
      verticalAlign: 'middle',
    },
  }))()
