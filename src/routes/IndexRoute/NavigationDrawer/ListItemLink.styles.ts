import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      width: "20px",
      height: "20px",
      marginRight: theme.spacing(1.5),
    },
    listItem: {
      paddingBottom: theme.spacing(2),
    },
    link: {
      width: "100%",
      padding: theme.spacing(1.5, 2),
      fontSize: theme.typography.h6.fontSize,
    },
    linkActive: {
      backgroundColor: theme.palette.action.selected,
    },
  })
);
