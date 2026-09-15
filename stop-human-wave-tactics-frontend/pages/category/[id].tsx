import type { GetServerSideProps } from "next";
import { contentProps } from "../../lib/content";
export { default } from "../../components/ContentPage";
export const getServerSideProps: GetServerSideProps = (context) =>
  contentProps(context, "category");
