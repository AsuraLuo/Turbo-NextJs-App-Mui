"use client";

import { useDispatch, useSelector } from "react-redux";
import { gql, TypedDocumentNode } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { isEmpty } from "lodash";
import Button from "@mui/material/Button";

import { actions as appActions } from "@/store/app";

const GET_STORE_CONFIG: TypedDocumentNode = gql`
  query getStoreConfig {
    storeConfig {
      code: store_code
      category_url_suffix
      cms_home_page
      sort_by: catalog_default_sort_by
      list_page: list_per_page
      list_values: list_per_page_values
      locale
      logo_alt
      shortcut_icon: head_shortcut_icon
      product_url_suffix
      logo_src: header_logo_src
      secure_base_url
      secure_base_media_url
    }
    currency {
      code: base_currency_code
      symbol: base_currency_symbol
    }
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const storeConfig = useSelector((state: any) => state.app.storeConfig);

  const { data } = useSuspenseQuery(GET_STORE_CONFIG, {
    fetchPolicy: "cache-first",
  });
  if (isEmpty(storeConfig)) dispatch(appActions.setAppConfig({ ...data }));

  return (
    <div>
      <Button variant="outlined">Home Page</Button>
    </div>
  );
};

export default Home;
