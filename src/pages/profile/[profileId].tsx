import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GET_CHARACTER } from "graphql/queries";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useStyles from "./Profile.styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";
import { client } from "../../../apollo";
import { ICharacter } from "types";
import { GetServerSidePropsContext } from "next";
import { initGetServerSideProps } from "shared/server";

export const getServerSideProps = initGetServerSideProps(
  async (ctx: GetServerSidePropsContext) => {
    const { data } = await client.query({
      query: GET_CHARACTER,
      variables: {
        id: ctx.query.profileId,
      },
    });

    if (!data.character) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data,
      },
    };
  }
);

interface IProfileProps {
  data: { character: ICharacter };
}

const MyComponent = ({ data }: IProfileProps) => {
  const classes = useStyles();
  const router = useRouter();

  const {
    character: { image, name, id, gender, species, status, created },
  } = data;
  const rows = [
    { title: "Id", value: id },
    { title: "Name", value: name },
    { title: "Gender", value: gender },
    { title: "Species", value: species },
    { title: "Status", value: status },
    { title: "Created", value: `${moment(created).fromNow(true)} ago` },
  ];

  return (
    <Box className={classes.container} mt={2}>
      <Box className={classes.wrapper}>
        <Link href="/">
          <a className={classes.back}>
            <ArrowBackIcon />
            Back
          </a>
        </Link>
        <Box className={classes.avatarWrapper}>
          <Avatar sx={{ width: 150, height: 150 }}>
            <Image src={image} width={200} height={200} alt="avatar" />
          </Avatar>
        </Box>
        {rows.map(({ title, value }) => (
          <Box className={classes.mainInfo} key={title}>
            <Typography className={classes.title}>{title}</Typography>
            <Typography>{value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MyComponent;
