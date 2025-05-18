// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://delta-docs-incubator.netlify.app/",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      title: "Delta Lake",
      social: {
        github: "https://github.com/delta-io/delta",
      },
      editLink: {
        baseUrl:
          "https://github.com/jakebellacera/db-site-staging/tree/main/sites/delta-docs",
      },
      lastUpdated: true,
      logo: {
        light: "./src/assets/delta-lake-logo-light.svg",
        dark: "./src/assets/delta-lake-logo-dark.svg",
        replacesTitle: true,
      },
      sidebar: [
        { label: "Welcome", link: "/" },
        {
          label: "Apache Spark connector",
          collapsed: true,
          items: [
            {
              label: "Quickstart",
              link: "/quick-start",
            },
            {
              label: "Table batch reads and writes",
              link: "/delta-batch",
            },
            {
              label: "Table streaming reads and writes",
              link: "/delta-streaming",
            },
            {
              label: "Table deletes, updates, and merges",
              link: "/delta-update",
            },
            {
              label: "Change data feed",
              link: "/delta-change-data-feed",
            },
            {
              label: "Table utility commands",
              link: "/delta-utility",
            },
            {
              label: "Constraints",
              link: "/delta-constraints",
            },
            {
              label: "How does Delta Lake manage feature compatibility?",
              link: "/versioning",
            },
            {
              label: "Delta default column values",
              link: "/delta-default-columns",
            },
            {
              label: "Delta column mapping",
              link: "/delta-column-mapping",
            },
            {
              label: "Use liquid clustering for Delta tables",
              link: "/delta-clustering",
            },
            {
              label: "What are deletion vectors?",
              link: "/delta-deletion-vectors",
            },
            {
              label: "Drop Delta table features",
              link: "/delta-drop-feature",
            },
            {
              label: "Use row tracking for Delta tables",
              link: "/delta-row-tracking",
            },
            {
              label: "Storage configuration",
              link: "/delta-storage",
            },
            {
              label: "Delta type widening",
              link: "/delta-type-widening",
            },
            {
              label: "Universal Format (UniForm)",
              link: "/delta-uniform",
            },
            {
              label: "Read Delta Sharing Tables",
              link: "/delta-sharing",
            },
            {
              label: "Concurrency control",
              link: "/concurrency-control",
            },
            {
              label: "Migration guide",
              link: "/porting",
            },
            {
              label: "Best practices",
              link: "/best-practices",
            },
            {
              label: "Frequently asked questions (FAQ)",
              link: "/delta-faq",
            },
            {
              label: "Optimizations",
              link: "/optimiations-oss",
            },
          ],
        },
        {
          label: "Trino connector",
          link: "/delta-trino-integration",
        },
        {
          label: "Presto connector",
          link: "/delta-presto-integration",
        },
        {
          label: "AWS Redshift Spectrum connector",
          link: "/redshift-spectrum-integration",
        },
        {
          label: "Snowflake connector",
          link: "/snowflake-integration",
        },
        {
          label: "Google BigQuery connector",
          link: "/bigquery-integration",
        },
        {
          label: "Apache Flink connector",
          link: "/flink-integration",
        },
        {
          label: "Other connectors",
          link: "/delta-more-connectors",
        },
        {
          label: "Delta Kernel",
          link: "/delta-kernel",
        },
        {
          label: "Delta Standalone (deprecated)",
          link: "/delta-standalone",
        },
        {
          label: "Delta Lake APIs",
          link: "/delta-apidoc",
        },
        {
          label: "Releases",
          link: "/releases",
        },
        {
          label: "Delta Lake Resources",
          link: "/delta-resources",
        },
        {
          label: "Delta table properties reference",
          link: "/table-properties",
        },
        {
          label: "Contribute",
          link: "https://github.com/delta-io/delta/blob/master/CONTRIBUTING.md",
          attrs: { target: "_blank" },
        },
      ],
    }),
  ],
});
