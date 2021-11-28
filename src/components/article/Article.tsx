import { FC } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { IArticle } from "../../types/article";

const Article: FC<IArticle> = ({
  title,
  subtitle,
  user,
  date,
  likesCount,
  isLiked = false,
}) => {
  const theme = useTheme();

  return (
    <Card component="article">
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        title={user}
        titleTypographyProps={{
          fontSize: 16,
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium,
        }}
        subheader={date}
        subheaderTypographyProps={{
          fontSize: 12,
          color: theme.palette.text.secondary,
        }}
        action={
          <Button
            variant={isLiked ? "contained" : "outlined"}
            startIcon={<Favorite />}
            disableElevation
          >
            {likesCount}
          </Button>
        }
        sx={{
          "& .MuiCardHeader-action": {
            margin: 0,
            alignSelf: "auto",
          },
        }}
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1" color={theme.palette.text.secondary}>
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">Read more...</Button>
      </CardActions>
    </Card>
  );
};

export default Article;
