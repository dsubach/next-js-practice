import { useLazyQuery } from "@apollo/client";
import Table from "components/table/Table";
import { GET_CHARACTERS } from "graphql/queries";
import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { initGetServerSideProps } from "shared/server";
import { ICharacter } from "types";
import { characterColumns } from "utils/columns";
import { generateProfileRows } from "utils/table";
import { client } from "../../apollo";
import styles from "../../styles/Home.module.css";

export const getServerSideProps = initGetServerSideProps(async () => {
  const { data } = await client.query({
    query: GET_CHARACTERS,
    variables: {
      page: 1,
      filter: {},
    },
  });

  if (!data.characters) {
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

interface IIndexProps {
  data?: {
    characters: {
      info: {
        count: number;
      };
      results: ICharacter[];
    };
  };
}
const Home: NextPage = ({ data }: IIndexProps) => {
  const { characters } = data ?? {};
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(characters?.info.count ?? 0);
  const [tableData, setTableData] = useState<ICharacter[]>(
    characters?.results ?? []
  );

  const [getCharacters, { loading }] = useLazyQuery(GET_CHARACTERS, {
    onCompleted(data) {
      setCount(data?.characters?.info?.count ?? 0);
      setTableData(data?.characters?.results ?? []);
    },
  });

  const handlePageChange = async (page: number) => {
    await getCharacters({
      variables: {
        page: page + 1,
        filter: {},
      },
    });
    setPage(page);
  };

  const tableRows = useMemo(() => generateProfileRows(tableData), [tableData]);

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
          count={count}
          setPage={handlePageChange}
          page={page}
          loading={loading}
          tableHead={characterColumns}
        />
      </main>
    </div>
  );
};

export default Home;
