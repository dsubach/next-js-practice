import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GET_LOCATION, GET_LOCATIONS } from "graphql/queries";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo } from "react";
import useStyles from "./Locations.styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import moment from "moment";
import { client } from "../../../apollo";
import { ILocation } from "types";
import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import { initGetServerSideProps } from "shared/server";
import { ROUTES } from "constants/routes";

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const id = ctx.params?.locationId;

  const { data } = await client.query({
    query: GET_LOCATION,
    variables: {
      id,
    },
  });

  if (!data.location) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const {
    data: { locations },
  } = await client.query({
    query: GET_LOCATIONS,
    variables: {
      page: 1,
      filter: {},
    },
  });
  return {
    fallback: false,
    paths: locations.results.map((location: ILocation) => ({
      params: { locationId: location.id },
    })),
  };
};

interface ILocationProps {
  data: { location: ILocation };
}

const Location = ({ data }: ILocationProps) => {
  const classes = useStyles();
  const router = useRouter();

  const {
    location: { id, name, type, dimension, residents, created },
  } = data;

  const rows = [
    { title: "Id", value: id },
    { title: "Name", value: name },
    { title: "Type", value: type },
    { title: "Dimension", value: dimension },
    { title: "Residents", value: residents.map(({ name }) => name).join(", ") },
    { title: "Created", value: `${moment(created).fromNow(true)} ago` },
  ];

  return (
    <Box className={classes.container} mt={2}>
      <Box className={classes.wrapper}>
        <Link href={ROUTES.LOCATIONS}>
          <a className={classes.back}>
            <ArrowBackIcon />
            Back
          </a>
        </Link>
        <Box mt={2}>
          {rows.map(({ title, value }) => (
            <Box className={classes.mainInfo} key={title}>
              <Typography className={classes.title}>{title}</Typography>
              <Typography sx={{ maxWidth: 300 }}>{value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Location;
