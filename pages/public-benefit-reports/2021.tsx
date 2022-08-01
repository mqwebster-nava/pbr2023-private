// https://www.navapbc.com/public-benefit-reports/2020/
import { getMarkdownByFilename } from "../../lib/markdown";
import Image from "next/image";
import Nava2020Cover from "../../public/images/pbrs/nava-cover-2200x700-teal-2020.jpg";
import VASectionCover from "../../public/images/pbrs/nava-VA-2200x700-hi-res.jpg";
import CASectionCover from "../../public/images/pbrs/nava-cali-2200x700-hi-res.jpg";
import MedicareSectionCover from "../../public/images/pbrs/nava-medicare-2200x700-hi-res.jpg";
import CloudSectionCover from "../../public/images/pbrs/nava-cloud-2200x700-hi-res.jpg";
import React, { useRef } from "react";
import { ReportHeaderNavy, SectionHeader } from "components/blocks";
import { PageInterface } from "shared_interfaces/page_interface";
import ReportTemplate from "components/templates/ReportTemplate/ReportTemplate";

const contentBlocks = [
      {
          "id": "40dqo7MwQ2iP1N3HNnfXz9",
          "__typename": "ReportSection",
          "title": "Equity looks like…",
          "anchor":"equity",
          "body": "As a public benefit corporation, Nava has a fiduciary duty to our mission. We’re responsible to ourselves and the public for ensuring that critical government services are simple, effective, and accessible to all. ",
          "reportSubsectionsCollection":{
            "items":[
              {
                "id": "64MfaW25ru0QgnwJphLgfs",
                "__typename": "ScrollingBlock",
                "title": "Small pilots that make a big impact",
                "anchor":"impact",
                "body": "Our annual reports help keep us accountable. See how we measure up year over year.\n",
                "storiesCollection": {
                  "items": [
                    {
                      "id":"story-id",
                      "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-1.png",
                      "title":"VASI",
                      "anchor":"vasi",
                      "intro":"Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs Office of the CTO’s (OCTO) Benefits Delivery Team to build tools that reduce the amount of time it takes to process a Veterans’ disability benefits claim. We envision a future where Veterans hear back about benefits claims in days instead of months, ensuring that they and their families receive the healthcare they need in a timely manner.",
                      "fullText":"To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n\n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months.\n\n So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
                    },
                    {
                      "id":"story-id2",
                      "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-2.png",
                      "title":"Mass PFML",
                      "anchor":"masspfml",
                      "intro":" In January 2021, we designed, tested, and built a new digital service, paidleave.mass.gov — in just 13 months — to help Massachusetts workers as they apply for and manage benefits. In tandem with this work, we built the API integration layer to connect multiple state systems with paidleave.mass.gov and other paid family and medical leave systems.",
                      "fullText":" In our shared long-term vision, Massachusetts workers, families, and employers will be able to confidently navigate life’s critical moments because paidleave.mass.gov’s personalized support makes managing paid leave simple. We launched this project with several pilots. In a pilot, we incrementally develop pieces of the end-to-end experience and test them with real users (pilot participants) before the service launches to the public. This helps us identify and mitigate risks early on so we can affirm that what we ultimately deliver works for users, integrates with downstream systems, and collects the information needed to meet program goals. In a multi-vendor environment with a strict legislative deadline, pilots also serve as milestones for teams to align on so we can collaboratively build and validate new features.  For our first pilot, we designed and built an application that allowed claimants to create an account, log in, verify an account, reset the password, log out, and take the first steps toward creating a claim. We also tested a key technical integration with the Department of Revenue (DOR), which provides contribution and wage data that is essential to determining a claimant's eligibility. In the second and third pilots, we expanded the application to allow claimants to submit an application and ensured that Massachusetts administrators receive the complete and accurate data needed to adjudicate a claim. Building and testing piece-by-piece, over multiple pilots, also allows us to test the application with a diverse set of participants to further ensure that it’s simple and easy to use for everyone. In one testing session, we discovered a loophole where participants were stuck because they were unable to reset their password. This was important because we learned from other states with PFML programs that password resets are a primary cause of high call volume at call centers. We knew that creating a simple self-service reset password flow would reduce the burden on the call center, saving staff time and resources. In this case, a participant mistyped their email address when completing the flow for resetting their password. We updated the flow to allow users to fix a mistyped email address and still successfully reset their password.  Pilots let us discover unforeseen and unpredictable errors like these in a low-risk environment, before they become a barrier to claimants and a burden to staff. In this first pilot, we were able to build and test the first steps of the account creation process — an essential part of the user experience — with real users.  This particular pilot was our first step in building Massachusetts’ brand new Paid Family Medical Leave (PFML) program at paidleave.mass.gov. Since we launched in 2021, the program has paid out nearly $600 million in benefits programs to over 90,000 people who were experiencing a big life event. We built digital tools for both claimants and employers using the program, helping to make managing paid leave simple for all. Our shared goal is to ensure that workers, families, and employers in the Commonwealth will be able to confidently navigate life’s critical moments. "
                    },
                    {
                      "id":"story-id3",
                      "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-3.png",
                      "title":"CMS MAX",
                      "anchor":"cmsmax",
                      "intro":"The team at Nava set out to improve the experience for patients who rely on the Centers for Medicare & Medicaid Services (CMS). With the idea of equity baked in from the very start, we decided to zero in on a major patient-facing service—the CMS message center—to make users feel not just seen or heard, but to have their individual needs identified and understood.",
                      "fullText":"Building off the work we did in 2020, this past year we worked to take the CMS online experience to the next level through better strategy, processes and governance, always keeping sustainability and good practices in mind. Above all, we aimed to make receiving messages as simple as possible for beneficiaries with minimal resources; to instill increased confidence in CMS; and to feel like they’re being taken care of on a personal level. We had a lot of big ideas when it came to what we wanted the message center to provide, but most came down to the idea of using data to unlock more personalized healthcare for beneficiaries. First and foremost, we wanted to help them plan their healthcare, manage coverage and manage costs. We also endeavored to make sure beneficiaries were able to manage any chronic conditions, keep track of their prescriptions, and crucially, build trust in the care CMS provides. Utilizing the information that CMS already has about beneficiaries and their medical needs, we set out to use that information to provide value to the beneficiary beyond just confirmations of payment. For example, this year beneficiaries will receive an email immediately after enrolling in a new plan to make them feel certain they’ll be getting the appropriate care. We believe providing clear and timely feedback improves the self-service experience. "
                    },
                  ]
                }
              },
              {
                "id": "64MfaW25ru0QgnwJphLgfs",
                "__typename": "ScrollingBlock",
                "title": "Accessing Accessibility ",
                "anchor":"accessibility",
                "body": "Our annual reports help keep us accountable. See how we measure up year over year.\n",
                "storiesCollection": {
                  "items": [
                    {
                      "id":"story-id",
                      "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-4.png",
                      "title":"Vermont Medicaid for the Aged, Blind, and Disabled",
                      "anchor":"vermontmedicaid",
                      "intro":"Building easy-to-use and accessible government services for all requires that everyone — including the one in four Americans living with disabilities — can access information and functionality in the service you create. Limited sight, a cognitive impairment, or inability to grip a mouse should not interfere with someone’s ability to access digital services.",
                      "fullText":"To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n\n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months.\n\n So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
                    },
                    {
                      "id":"story-id2",
                      "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-5.png",
                      "title":"Department of Justice ",
                      "anchor":"justice",
                      "intro":"The Americans with Disabilities Act (ADA) was passed by Congress in 1990 and is a federal civil rights law that prohibits discrimination against people with disabilities in everyday activities. Whether it’s planning lunch at a cafe, or planning a new office, it’s essential people, businesses, and public offices know their rights and responsibilities under the ADA—and above all, are able to easily access that information in real time.",
                      "fullText":" In our shared long-term vision, Massachusetts workers, families, and employers will be able to confidently navigate life’s critical moments because paidleave.mass.gov’s personalized support makes managing paid leave simple. We launched this project with several pilots. In a pilot, we incrementally develop pieces of the end-to-end experience and test them with real users (pilot participants) before the service launches to the public. This helps us identify and mitigate risks early on so we can affirm that what we ultimately deliver works for users, integrates with downstream systems, and collects the information needed to meet program goals. In a multi-vendor environment with a strict legislative deadline, pilots also serve as milestones for teams to align on so we can collaboratively build and validate new features.  For our first pilot, we designed and built an application that allowed claimants to create an account, log in, verify an account, reset the password, log out, and take the first steps toward creating a claim. We also tested a key technical integration with the Department of Revenue (DOR), which provides contribution and wage data that is essential to determining a claimant's eligibility. In the second and third pilots, we expanded the application to allow claimants to submit an application and ensured that Massachusetts administrators receive the complete and accurate data needed to adjudicate a claim. Building and testing piece-by-piece, over multiple pilots, also allows us to test the application with a diverse set of participants to further ensure that it’s simple and easy to use for everyone. In one testing session, we discovered a loophole where participants were stuck because they were unable to reset their password. This was important because we learned from other states with PFML programs that password resets are a primary cause of high call volume at call centers. We knew that creating a simple self-service reset password flow would reduce the burden on the call center, saving staff time and resources. In this case, a participant mistyped their email address when completing the flow for resetting their password. We updated the flow to allow users to fix a mistyped email address and still successfully reset their password.  Pilots let us discover unforeseen and unpredictable errors like these in a low-risk environment, before they become a barrier to claimants and a burden to staff. In this first pilot, we were able to build and test the first steps of the account creation process — an essential part of the user experience — with real users.  This particular pilot was our first step in building Massachusetts’ brand new Paid Family Medical Leave (PFML) program at paidleave.mass.gov. Since we launched in 2021, the program has paid out nearly $600 million in benefits programs to over 90,000 people who were experiencing a big life event. We built digital tools for both claimants and employers using the program, helping to make managing paid leave simple for all. Our shared goal is to ensure that workers, families, and employers in the Commonwealth will be able to confidently navigate life’s critical moments. "
                    },
                  ]
                }
              },
            ]
          }
      },
      {
        "id": "0dqo7MwQ2iP1N3HNnfXz9",
        "__typename": "ReportSection",
        "title": "Sustainability looks like…",
        "anchor":"sustainability",
        "body": "As a public benefit corporation, Nava has a fiduciary duty to our mission. We’re responsible to ourselves and the public for ensuring that critical government services are simple, effective, and accessible to all. \n\nMeeting our mission is an opportunity to restore trust between people and public institutions. We focus on populations that are the least protected because the stakes are higher.",
        "reportSubsectionsCollection":{
          "items":[
            {
              "id": "64MfaW25ru0QgnwJphLgfs",
              "__typename": "ScrollingBlock",
              "title": "Human-centered infrastructure",
              "anchor":"infrastructure",
              "body": "Our annual reports help keep us accountable. See how we measure up year over year.\n",
              "storiesCollection": {
                "items": [
                  {
                    "id":"story-id",
                    "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-1.png",
                    "title":"California Unemployment",
                    "anchor":"caliunemployment",
                    "intro":"Online claims trackers can be an intuitive, useful tool for public benefit programs to adopt. They can help communicate to claimants where their unemployment or healthcare claim stands, building trust and reducing the need for burdensome interactions, such as calling a contact center. Claims trackers are a familiar feature in the private sector, from package tracking to pizza delivery apps. In an increasingly digital world, many have come to expect these kinds of self-service, private sector experiences in the public benefits space.",
                    "fullText":"To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n\n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months.\n\n So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
                  },
                  {
                    "id":"story-id",
                    "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-1.png",
                    "title":"WIC",
                    "anchor":"wic",
                    "intro":"Over 6 million pregnant people, breastfeeding parents, infants, and children get help accessing healthy food, education, and other services through the federal nutrition program known as the Special Supplemental Nutrition Program for Women, Infants, and Children (WIC). WIC embraces innovation to meet participant needs, serving nearly half of all infants born in the US, and reducing the risk of infant mortality by 33 percent. Still, when it comes to adopting technology, agencies across the country grapple with the constraints of existing technology systems.",
                    "fullText":"To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n\n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months.\n\n So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
                  },
                  {
                    "id":"story-id",
                    "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-1.png",
                    "title":"MPSM",
                    "anchor":"mpsm",
                    "intro":"Nava is working with the CMS on the Medicare Payment System Modernization (MPSM) program to create modern, flexible, and scalable infrastructure to support a payment system that serves millions of Americans and accounts for 14 percent of the federal budget. Through our ongoing work shifting CMS’s payments system onto the cloud, our goal is to unlock siloed claims data. More accessible claims data can inform and empower healthcare providers and CMS program officials to make decisions that lead to a healthier, more equitable public.",
                    "fullText":"To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n\n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months.\n\n So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
                  },
                  {
                    "id":"story-id",
                    "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-1.png",
                    "title":"CMS Cloud",
                    "anchor":"cmscloud",
                    "intro":"Nava continues to assist The Centers for Medicare & Medicaid Services (CMS) as they shift their technology ecosystem away from aging, traditional data centers and onto the cloud. While hundreds of applications already run on CMS’s cloud platforms today, CMS continues to migrate more applications, services and other workloads away onto the cloud platform. This transition offers CMS teams compliant, adaptable, cost effective, and highly secure ways of managing applications and data. While traditional data centers are limited in their capacity for responsive change, cloud allows CMS teams to react and quickly pivot technology for the unexpected — such as, say, a mass of new claimants triggered by a global pandemic.",
                    "fullText":"To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n\n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months.\n\n So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
                  },
                ]
              }
            },
            {
              "id": "64MfaW25ru0QgnwJphLgfs",
              "__typename": "ScrollingBlock",
              "title": "Two steps forward one step back",
              "anchor":"step",
              "body": "Our annual reports help keep us accountable. See how we measure up year over year.\n",
              "storiesCollection": {
                "items": [
                  {
                    "id":"story-id",
                    "__typename": "StoryComponent",
                      "image":"/images/pbrs/PBR-sketch-1.png",
                    "title":"Nebraska Integrated Benefits",
                    "anchor":"nebraskaib",
                    "intro":"Integrating eligibility and enrollment benefits is an increasingly important undertaking for state governments around the country. People who qualify for multiple public benefit programs shouldn’t have to fill out multiple applications that require the same basic information to access these benefits. But states already in the process of integrating benefits are encountering an issue: differing and at times contradictory submission requirements dictated by the federal agencies running these benefits programs.",
                    "fullText":"To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n\n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months.\n\n So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
                  },
                ]
              }
            },

          ]
        }
    },
]



export default function PBR2021(props: PageInterface) {
  //const report = props.contentBlocks[0];

  return (
    <div>
     
        <ReportHeaderNavy title={"Public Benefit Report"} maxWidth="max-w-xl" />
        <Image
          alt={""}
          src={Nava2020Cover}
          layout="responsive"
        />
        <ReportTemplate {...props}> </ReportTemplate>
        {/* <SectionHeader title={"Equity is..."} id={"eq"} />
        <ScrollingBlock
          title={"Small pilots make a big impact"}
          kicker={"Equity is..."}
          id={"test"}
          body={"Body Text"}
          stories={[
            {
              title: "Veterans Affairs to receive benefits to cover",
              intro:
                "Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs Office of the CTO’s (OCTO) Benefits Delivery Team to build tools that reduce the amount of time it takes to process a Veterans’ disability benefits claim. We envision a future where Veterans hear back about benefits claims in days instead of months, ensuring that they and their families receive the healthcare they need in a timely manner.",
              full: "To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
            },
            {
              title: "Massachusetts PFML",
              intro:
                "Veterans who file claims to receive benefits to cover certain health issues can sometimes get stuck in a waiting pattern. Nava is working with the U.S. Department of Veterans Affairs Office of the CTO’s (OCTO) Benefits Delivery Team to build tools that reduce the amount of time it takes to process a Veterans’ disability benefits claim. We envision a future where Veterans hear back about benefits claims in days instead of months, ensuring that they and their families receive the healthcare they need in a timely manner.",
              full: "To speed up the handling of these claims, we developed a prototype to process one specific disability claim – hypertension – and released it to a small number of claims in order to learn from and continually iterate on the prototype. We started with a prototype called the Hypertension Fast Tracker that allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. \n Through our research into the claims adjudication process, we discovered that requiring Veterans to complete duplicative, unnecessary medical exams in order to get a claim approved contributed to the delay. We hypothesized that by introducing Veterans Affairs Medical Center (VAMC) health evidence to VA claims benefits adjudicators, we could help reduce unnecessary medical exams when possible and decrease the times Veterans spend waiting for a claim decision. \n We approached this project by deciding to narrow the scope dramatically to quickly release a prototype to a small number of claims. Our prototype addressed one disability type for a subset of one type of claim, and was used several times a day by one or two pilot participants. By starting with such a dramatically slow rollout, we can learn and iterate the prototype based on how it performs. This is a crucial step in an evolving technology landscape like the VA’s where systems are continually upgraded. Both OCTO and the Veterans Benefits Administration (VBA) supported and fostered the kind of environment where we could release and continually improve these small prototypes. \n We went on to expand the prototype, now called the Rapid Ready for Decision program, to asthma claims, and are evaluating new claims for suitability as well. The measurably positive outcomes we have observed are a testament to the strength of our small scale, iterative approach and the use of prototypes when introducing new digital software. \n The initial prototype, the Hypertension Fast Tracker, was released in December 2021, and allowed some Veterans’ claims for hypertension disability benefits to be processed in days instead of months. So far, processing times using our prototypes have averaged 3-5 days for claims that don’t need exams and 25 days for those that do. That’s compared to 80 to 100 days on average. Even with our low volume of claims, we’ve saved Veterans over 5000 days of waiting for a decision this quarter. \n These are small outcomes, but that’s intentional. Our approach is to deliver value more quickly by starting small and learning through prototyping and iteration. Keeping this in mind, these outcomes are good indicators that are helping us learn and evolve our prototype. Our work is both serving veterans and providing knowledge generation for sustainable, repeatable processes in the VA’s future.",
            },
          ]}
        ></ScrollingBlock>
        <ScrollingBlock
          title={"Accessing Accessibility"}
          kicker={"Equity is..."}
          id={"test2"}
          body={"Body Text"}
          stories={[]}
        ></ScrollingBlock>
        <SectionHeader title={"Sustainability looks like"} id={"eq"} />
        <ScrollingBlock
          title={"Human-centered infrastructure"}
          kicker={"Sustainability looks like"}
          id={"test"}
          body={"Body Text"}
          stories={[]}
        ></ScrollingBlock>
        <ScrollingBlock
          title={"Two steps forward one step back"}
          kicker={"Sustainability looks like"}
          id={"test"}
          body={"Body Text"}
          stories={[]}
        ></ScrollingBlock> */}
     
    </div>
  );
}

export async function getStaticProps() {
  //const report = getMarkdownByFilename("public-benefit-reports", 2020);
  const formattedPage: PageInterface = {
    id: "public-benefit-reports/2021",
    slug: "/public-benefit-reports/2021",
    title: "Nava: Public Benefit Report: 2021",
    description:
      "Addressing the structural failures that have affected millions of Americans—most dramatically during the pandemic in 2020—requires resilience. See how we build it into everything we do.",
    socialImage: {
      id: "WufZdooSKmPSGJlCZlUtu",
      url: "https://images.ctfassets.net/t2ekr6eg3fr3/WufZdooSKmPSGJlCZlUtu/b5772ce17a9c3e4b1fd851d9fe059a1a/pbr-promo-image.png",
      width: 1596,
      height: 897,
      title: "PBR image",
      description: "",
    },
    pageHeader: null,
    contentBlocks: contentBlocks,
  };
  return {
    props: formattedPage,
  };
}
