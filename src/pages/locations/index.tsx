import Table from "components/table/Table";
import { GET_LOCATIONS } from "graphql/queries";
import type { NextPage } from "next";
import Head from "next/head";
import { initGetServerSideProps } from "shared/server";
import { ILocation } from "types";
import { locationColumns } from "utils/columns";
import { generateLocationRows, generateProfileRows } from "utils/table";
import { client } from "../../../apollo";
import styles from "../../../styles/Home.module.css";

export const getServerSideProps = initGetServerSideProps(async () => {
  const { data } = await client.query({
    query: GET_LOCATIONS,
    variables: {
      page: 0,
      filter: {},
    },
  });

  if (!data.locations) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
});

interface ILocationsProps {
  data?: {
    locations: {
      results: ILocation[];
    };
  };
}
const Locations: NextPage = ({ data }: ILocationsProps) => {
  const initialData = data?.locations.results ?? [];
  const tableRows = generateLocationRows(initialData);
  const loading = false;
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and morty</title>
        <meta name="description" content="Rick and morty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Table
          data={tableRows}
          count={initialData.length}
          setPage={() => {}}
          page={0}
          loading={loading}
          tableHead={locationColumns}
        />
      </main>
    </div>
  );
};

export default Locations;
