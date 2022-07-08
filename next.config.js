const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["images.ctfassets.net", "dl.airtable.com"],
  },
  async redirects() {
    return [
      {
        source: "/case-studies/the-billion-user-load-test.html",
        destination: "/case-studies/billion-user-load-test",
        permanent: true,
      },
      {
        source:"/case-studies/product-management-in-government-why-its-essential-when-the-stakes-are-high.html",
        destination: "/insights/product-management-government-high-stakes",
        permanent: true,
      },
      {
        source:"/case-studies/product-management-in-government-why-its-essential-when-the-stakes-are-high",
        destination: "/insights/product-management-government-high-stakes",
        permanent: true,
      },
      {
        source:
          "/case-studies/how-to-use-policy-as-an-engineering-tool-not-a-crutch.html",
        destination: "/insights/policy-engineering-tool",
        permanent: true,
      },
      {
        source:
          "/case-studies/how-to-use-policy-as-an-engineering-tool-not-a-crutch",
        destination: "/insights/policy-engineering-tool",
        permanent: true,
      },
      {
        source:
          "/case-studies/cloud-infrastructure-in-the-federal-government.html",
        destination:
          "/insights/cloud-infrastructure-excellent-customer-experiences",
        permanent: true,
      },
      {
        source:
          "/case-studies/cloud-infrastructure-in-the-federal-government",
        destination:
          "/insights/cloud-infrastructure-excellent-customer-experiences",
        permanent: true,
      },
      {
        source:
          "/case-studies/integrating-eligibility-and-enrollment-for-health-and-human-services.html",
        destination:
          "/case-studies/integrating-eligibility-enrollment-software",
        permanent: true,
      },
      {
        source:
          "/case-studies/integrating-eligibility-and-enrollment-for-health-and-human-services",
        destination:
          "/case-studies/integrating-eligibility-enrollment-software",
        permanent: true,
      },
      {
        source: "/case-studies/shaping-policy-with-design-practices.html",
        destination: "/case-studies/shaping-policy-design-practices",
        permanent: true,
      },
      {
        source: "/case-studies/shaping-policy-with-design-practices",
        destination: "/case-studies/shaping-policy-design-practices",
        permanent: true,
      },
      {
        source:
          "/case-studies/Supporting-Veterans-During-the-Pandemic-with-Virtual-Tele-Hearings.html",
        destination: "/case-studies/supporting-veterans-virtual-tele-hearings",
        permanent: true,
      },
      {
        source:
          "/case-studies/Supporting-Veterans-During-the-Pandemic-with-Virtual-Tele-Hearings",
        destination: "/case-studies/supporting-veterans-virtual-tele-hearings",
        permanent: true,
      },
      {
        source:
          "/case-studies/prioritizing-research-to-quickly-serve-people-during-a-crisis.html",
        destination: "/case-studies/help-people-crisis-user-research",
        permanent: true,
      },
      {
        source:
          "/case-studies/prioritizing-research-to-quickly-serve-people-during-a-crisis",
        destination: "/case-studies/help-people-crisis-user-research",
        permanent: true,
      },
      {
        source: "/case-studies/Integrating-Eligibility-&-Enrollment.html",
        destination:
          "/case-studies/observations-integrated-eligibility-enrollment",
        permanent: true,
      },
      {
        source: "/case-studies/Integrating-Eligibility-&-Enrollment",
        destination:
          "/case-studies/observations-integrated-eligibility-enrollment",
        permanent: true,
      },
      {
        source: "/insights/why-nava-public-benefit-corporation.html",
        destination: "/insights/why-nava-public-benefit-corporation",
        permanent: true,
      },
      {
        source: "/insights/digital-services-that-build-trust.html",
        destination: "/insights/digital-services-build-trust",
        permanent: true,
      },
      {
        source: "/insights/digital-services-that-build-trust",
        destination: "/insights/digital-services-build-trust",
        permanent: true,
      },
      {
        source: "/insights/reimagine-unemployment-insurance.html",
        destination:"/insights/reimagine-unemployment-insurance-services-start-small",
        permanent: true,
      },
      {
        source: "/insights/reimagine-unemployment-insurance",
        destination:"/insights/reimagine-unemployment-insurance-services-start-small",
        permanent: true,
      },
      {
        source: "/insights/paid-family-medical-leave-digital-age.html",
        destination: "/insights/paid-family-medical-leave-digital-age",
        permanent: true,
      },
      {
        source: "/insights/equitable-research-recruitment.html",
        destination: "/insights/begin-equitable-research-recruitment",
        permanent: true,
      },
      {
        source: "/insights/equitable-research-recruitment",
        destination: "/insights/begin-equitable-research-recruitment",
        permanent: true,
      },
      {
        source: "/insights/using-metrics-to-measure-your-program.html",
        destination: "/insights/outcomes-metrics-measure-program",
        permanent: true,
      },
      {
        source: "/insights/using-metrics-to-measure-your-program",
        destination: "/insights/outcomes-metrics-measure-program",
        permanent: true,
      },
      {
        source: "/insights/repeatable-processes-for-integrated-benefits-systems.html",
        destination: "/insights/repeatable-sustainable-processes-building-benefits-systems",
        permanent: true,
      },
      {
        source: "/insights/repeatable-processes-for-integrated-benefits-systems",
        destination:"/insights/repeatable-sustainable-processes-building-benefits-systems",
        permanent: true,
      },
      {
        source: "/insights/use-us-web-design-system.html",
        destination: "/insights/us-web-design-system",
        permanent: true,
      },
      {
        source: "/insights/api-standard-wic-mis.html",
        destination: "/insights/api-standard-wic-mis",
        permanent: true,
      },
      {
        source: "/insights/unlocking-technology-wic-montana.html",
        destination: "/news/unlocking-technology-wic-montana",
        permanent: true,
      },
      {
        source: "/insights/envision-future-PFML.html",
        destination: "/insights/envision-future-paid-family-medical-leave",
        permanent: true,
      },
      {
        source: "/insights/envision-future-PFML",
        destination: "/insights/envision-future-paid-family-medical-leave",
        permanent: true,
      },
      {
        source: "/toolkits/service-blueprinting-facilitation-guide.html",
        destination: "/toolkits/service-blueprinting-facilitation-guide",
        permanent: true,
      },
      {
        source:
          "/toolkits/help-people-faster-during-a-crisis-with-service-design.html",
        destination: "/toolkits/service-design-crisis-response",
        permanent: true,
      },
      {
        source:
          "/toolkits/help-people-faster-during-a-crisis-with-service-design",
        destination: "/toolkits/service-design-crisis-response",
        permanent: true,
      },
      {
        source:
          "/toolkits/protect-privacy-and-get-informed-consent-during-research.html",
        destination: "/toolkits/plain-language-templates-user-research",
        permanent: true,
      },
      {
        source:
          "/toolkits/protect-privacy-and-get-informed-consent-during-research",
        destination: "/toolkits/plain-language-templates-user-research",
        permanent: true,
      },
      {
        source: "/toolkits/conduct-user-research-to-improve-forms.html",
        destination: "/toolkits/user-research-improving-forms",
        permanent: true,
      },
      {
        source: "/toolkits/conduct-user-research-to-improve-forms",
        destination: "/toolkits/user-research-improving-forms",
        permanent: true,
      },
      {
        source:
          "/toolkits/build-high-performing-product-teams-with-product-ops-processes.html",
        destination: "/toolkits/product-operations-processes",
        permanent: true,
      },
      {
        source:
          "/toolkits/build-high-performing-product-teams-with-product-ops-processes",
        destination: "/toolkits/product-operations-processes",
        permanent: true,
      },
      {
        source: "/toolkits/content-strategy-for-user-onboarding.html",
        destination: "/toolkits/content-strategy-user-onboarding",
        permanent: true,
      },
      {
        source: "/toolkits/content-strategy-for-user-onboarding",
        destination: "/toolkits/content-strategy-user-onboarding",
        permanent: true,
      },
      {
        source:
          "/toolkits/measuring-success-power-your-mission-with-human-centered-agile-technology.html",
        destination: "/toolkits/measuring-success-power-mission",
        permanent: true,
      },
      {
        source:
          "/toolkits/measuring-success-power-your-mission-with-human-centered-agile-technology",
        destination: "/toolkits/measuring-success-power-mission",
        permanent: true,
      },
      {
        source:
          "/toolkits/engaging-users-and-iterating-power-your-mission-with-human-centered-agile-technology.html",
        destination: "/toolkits/engaging-users-iterating-power-mission",
        permanent: true,
      },
      {
        source:
          "/toolkits/engaging-users-and-iterating-power-your-mission-with-human-centered-agile-technology",
        destination: "/toolkits/engaging-users-iterating-power-mission",
        permanent: true,
      },
      {
        source:
          "/toolkits/building-tech-power-your-mission-with-human-centered-agile-technology.html",
        destination: "/toolkits/building-technology-power-mission",
        permanent: true,
      },
      {
        source:
          "/toolkits/building-tech-power-your-mission-with-human-centered-agile-technology",
        destination: "/toolkits/building-technology-power-mission",
        permanent: true,
      },
      {
        source:
          "/toolkits/setting-goals-power-your-mission-with-human-centered-agile-technology.html",
        destination: "/toolkits/setting-goals-power-mission",
        permanent: true,
      },
      {
        source:
          "/toolkits/setting-goals-power-your-mission-with-human-centered-agile-technology",
        destination: "/toolkits/setting-goals-power-mission",
        permanent: true,
      },
      {
        source: "/working-at-nava/infrastructure-engineer-Wei-Leong.html",
        destination: "/working-at-nava/infrastructure-engineer-Wei-Leong",
        permanent: true,
      },
      {
        source: "/working-at-nava/software-engineer-alsia-plybeah.html",
        destination: "/working-at-nava/software-engineer-Alsia-Plybeah",
        permanent: true,
      },
      {
        source: "/working-at-nava/program-strategist-martelle-esposito.html",
        destination: "/working-at-nava/program-strategist-martelle-esposito",
        permanent: true,
      },
      {
        source: "/working-at-nava/program-director-angela-colter.html",
        destination: "/working-at-nava/program-director-angela-colter",
        permanent: true,
      },
      {
        source: "/working-at-nava/when-feedback-start-yourself.html",
        destination: "/working-at-nava/feedback-start-with-yourself",
        permanent: true,
      },
      {
        source: "/working-at-nava/software-engineer-sharon-warner.html",
        destination: "/working-at-nava/software-engineer sharon-warner",
        permanent: true,
      },
      {
        source: "/working-at-nava/learning-front-end-development-designer.html",
        destination: "/working-at-nava/learning-front-end-development-designer",
        permanent: true,
      },
      {
        source:
          "/working-at-nava/interviewing-at-nava-preparing-for-portfolio-presentation.html",
        destination:
          "/working-at-nava/interviewing-preparing-portfolio-presentation",
        permanent: true,
      },
      {
        source:
          "/working-at-nava/interviewing-at-nava-preparing-for-portfolio-presentation",
        destination:
          "/working-at-nava/interviewing-preparing-portfolio-presentation",
        permanent: true,
      },
      {
        source: "/working-at-nava/senior-engineer-kat-tipton.html",
        destination: "/working-at-nava/senior-engineer-kat-tipton",
        permanent: true,
      },
      {
        source: "/working-at-nava/security-engineer-mohib-rizvi.html",
        destination: "/working-at-nava/security-engineer-Mohib-Rizvi",
        permanent: true,
      },
      {
        source: "/working-at-nava/billie-wright-vp-people-operations.html",
        destination: "/working-at-nava/billie-wright-vp-people-operations",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/story",
        permanent: true,
      },
      {
        source: "/services/case-studies",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/diversity",
        destination: "/dei",
        permanent: true,
      },
      {
        source: "/services/insights",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/careers/open-roles",
        destination: "/open-roles",
        permanent: true,
      },
      {
        source: "/poc-social",
        destination: "/events/poc-social",
        permanent: true,
      },
      {
        source: "/about/press",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/services/public-benefit-reports",
        destination: "/public-benefit-reports/2020",
        permanent: true,
      },
      {
        source: "/about/team",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/time-tax-event",
        destination: "/events/envision-future-lifting-time-tax",
        permanent: true,
      },
      {
        source: "/services/toolkits",
        destination: "/toolkits",
        permanent: true,
      },
      {
        source: "/wic-office-hours",
        destination: "/partnerships/wic",
        permanent: true,
      },
      {
        source: "/wic-partnerships",
        destination: "/partnerships/wic",
        permanent: true,
      },
      {
        source: "/uploads/2019NavaPublicBenefitReport.pdf",
        destination: "/files/2019NavaPublicBenefitReport.pdf",
        permanent: true,
      },
      {
        source: "/uploads/nava-public-benefit-report-2018.pdf",
        destination: "/files/2018NavaPublicBenefitReport.pdf",
        permanent: true,
      },
      {
        source:
          "/uploads/Form%20design%20approaches%20for%20downstream%20effects%20&%20nonlinear%20navigation.pdf",
        destination:
          "/files/Form%20design%20approaches%20for%20downstream%20effects%20&%20nonlinear%20navigation.pdf",
        permanent: true,
      },
      {
        source: "/uploads/How%20to%20shape%20policy%20as%20a%20designer.pdf",
        destination: "/files/How%20to%20shape%20policy%20as%20a%20designer.pdf",
        permanent: true,
      },
      {
        source:
          "/uploads/nava-dora-federal-cloud-infrastructure-whitepaper.pdf",
        destination:
          "/files/nava-dora-federal-cloud-infrastructure-whitepaper.pdf",
        permanent: true,
      },
      {
        source: "/uploads/nava-dora-federal-cloud-infrastructure.pdf",
        destination: "/files/nava-dora-federal-cloud-infrastructure.pdf",
        permanent: true,
      },
      {
        source:
          "/uploads/Providing%20help%20and%20guidance%20to%20HealthCare.gov%20applicants.pdf",
        destination:
          "/files/Providing%20help%20and%20guidance%20to%20HealthCare.gov%20applicants.pdf",
        permanent: true,
      },
      {
        source:
          "/uploads/Structuring%20a%20complex%20eligibility%20form%20for%20HealthCare.gov.pdf",
        destination:
          "/files/Structuring%20a%20complex%20eligibility%20form%20for%20HealthCare.gov.pdf",
        permanent: true,
      },
    ];
  },
});
