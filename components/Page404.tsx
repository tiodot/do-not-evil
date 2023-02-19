import * as React from "react";

import * as types from "@/lib/types";
import Image from "next/image";
import { PageHead } from "./PageHead";
import styles from "./styles.module.css";

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || "Notion Page Not Found";

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Notion Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )}

          <Image
            src="/404.png"
            alt="404 Not Found"
            height={800}
            width={1000}
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  );
};
