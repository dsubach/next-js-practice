import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ROUTES } from "constants/routes";

export const initGetServerSideProps = (
  callback: (ctx: GetServerSidePropsContext) => ReturnType<GetServerSideProps>
) => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<ReturnType<GetServerSideProps>> => {
    try {
      return await callback(ctx);
    } catch (e) {
      console.log(e);
      return {
        redirect: {
          permanent: false,
          destination: ROUTES.SOMETHING_WRONG,
        },
      };
    }
  };
};
