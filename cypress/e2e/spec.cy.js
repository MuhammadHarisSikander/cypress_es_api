const identifer = "michael-parnell-phd-rn-fache-2001b128";
const token =
  "eyJraWQiOiJRa2ZQM0pBXC9pQXhYYmI2VThMOExFczhkUEVkdXI5cVwvbzFNZm1XSEZNVUk9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI3M2ZiNDk1Mi0wZmYzLTQ1NTgtYjBmMy00NjM2ZTYzNGY1MDkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZaHFnNmxNNmciLCJjbGllbnRfaWQiOiJkcHJiYnIza3VlbWlzbXJtbTg3NTUzdjJ0Iiwib3JpZ2luX2p0aSI6IjdhM2Y5YzAzLTBkNzMtNDVmNy1hZTE4LWQyNzhiMTZjYmEwNCIsImV2ZW50X2lkIjoiYWZkNTQ4N2EtMTRjMS00ZWIwLWE2MTMtOWQwNGYxY2M4MDUwIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY5MzA2NjM4NiwiZXhwIjoxNjkzMTUyNzg2LCJpYXQiOjE2OTMwNjYzODYsImp0aSI6IjBjZWMwOWUxLWQ5ZWItNDg0Zi1iZmM4LTJmM2M0MGZkZmRjOSIsInVzZXJuYW1lIjoiNzNmYjQ5NTItMGZmMy00NTU4LWIwZjMtNDYzNmU2MzRmNTA5In0.wGfxQitzHtiMi4xQofV5YukcmN13dBTzMmZDM_qSTag96IhQp1G_bccoM47tz3fUxdQf4D9ddBCnHPJtnrnTH0RQ7YBc2bdZD9vYPZiJvRDcndXFoOiDBEoLm5LJ2xZu5QBdaxC79x7CImzRkfOh9uvlnHaAd6GKIXy23qVG9Y-QLCuK9t1KiYfmFrQ7O6qLUM70eXxg0FZfMmHIeGOq9sTC3e4T_ZzZ_cpdoYltJryd0PJA8DXl7XBDX_KPAWGEFLc66a33nqHtROAnn8VJ3vTEmsjE7EecwXIhq7Nfjq4xtaQ7TEv-T_k7j80CG-_VsVWTKP3v8-wPGT6-0L6zxw";
// describe("[ **JOB ONE** ]", () => {
//   it("Filter: Current Title & All Companies in Current company filter", () => {
//     cy.request(
//       "POST",
//       "https://ahyyqcbtwoiz3xuj5ciydju5fi0txiqp.lambda-url.us-east-1.on.aws/",
//       {
//         body: {
//           query: {
//             term: {
//               publicIdentifier: {
//                 value: identifer,
//               },
//             },
//           },
//         },
//         index: "profiles",
//       }
//     )
//       .then((res) => {
//         // console.log(res.body.hits.hits[0]._source)
//         const result = res?.body?.hits?.hits[0]?._source;
//         // console.log(result);
//         if (result?.publicIdentifier == identifer) {
//           console.log("Profle found in ES of QLU 2.. Pass");
//         } else {
//           console.log("Profle not found in ES of QLU 2.. Fail");
//         }

//         return result;
//       })
//       .then((result) => {
//         cy.log("User Title: " + result?.experience[0]?.title);
//         const universalNamesArray = [];
//         const un = result?.experience;
//         un.forEach((item) => {
//           if (item.universalName.length > 0) {
//             universalNamesArray.push({ universalName: item.universalName });
//           }
//         });
//         cy.log(universalNamesArray);
//         cy.request({
//           method: "POST",
//           url: "https://9w8wzjivr9.execute-api.us-east-1.amazonaws.com/scorev2",
//           body: {
//             profileNames: {
//               isSelected: [result?.fullName],
//               isRemoved: [],
//             },
//             jobTitles: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     name: result?.experience[0]?.title,
//                     min: 1,
//                     max: 50000000,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             managementTitles: {
//               isSelected: ["Head", "Owner"],
//               isRemoved: ["Founder"],
//               isStrict: false,
//             },
//             experience: {
//               total: {
//                 min: 1,
//                 max: 10,
//               },
//               relevant: {
//                 min: 1,
//                 max: 10,
//               },
//             },
//             education: {
//               degree: {
//                 isStrict: true,
//                 isSelected: ["bachelors", "masters"],
//                 isRemoved: [],
//               },
//               major: {
//                 isStrict: true,
//                 isSelected: ["computer science", "business"],
//                 isRemoved: [],
//               },
//             },
//             industries: {
//               isStrict: false,
//               isSelected:
//                 result?.experience[0]?.companySpecialities ||
//                 result?.experience[0]?.industries,
//               isRemoved: [],
//             },
//             skills: {
//               isStrict: false,
//               isSelected: ["JS", "Python"],
//               isRemoved: [],
//             },
//             company: {
//               current: {
//                 isSelected: universalNamesArray,
//                 isRemoved: [],
//               },
//               companySizes: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               currentCompanyExperience: {},
//               previous: {
//                 isSelected: [
//                   {
//                     universalName: result?.experience[1]?.universalName,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//             },
//             locations: {
//               current: {
//                 isStrict: false,
//                 isSelected: [result?.locationFullPath] || [
//                   result?.experience[0]?.location,
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               zipCodes: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             isTitleSelected: true,
//             isCompanySearchSelected: true,
//             isManagementLevelSelected: false,
//             isLocationSelected: false,
//             isExperienceSelected: false,
//             isIndustrySelected: false,
//             isEducationSelected: false,
//             isSkillSelected: false,
//             isProfileNameSelected: false,
//           },
//         })
//           .then((res) => {
//             const result2 = res.body.result;
//             return result2;
//           })
//           .then((result2) => {
//             cy.log("Total Profile fetched: " + result2?.length || "0");
//             cy.request({
//               method: "POST",
//               url: "http://api.theqlu.com/es/qsearchProfileByEsId",
//               body: result2,
//               headers: {
//                 Authorization: "Bearer " + token,
//               },
//             })
//               .then((res) => {
//                 console.log("Total ES Profile's", res);
//                 const profileResponse = res.body.response;

//                 return profileResponse;
//               })
//               .then((profileResponse) => {
//                 profileResponse.map((val, key) => {
//                   console.log(val.publicIdentifier);
//                   if (val.publicIdentifier == identifer) {
//                     expect(val.publicIdentifier).to.equal(identifer);
//                     cy.log(
//                       "Profile Found: " + key + " " + val.publicIdentifier
//                     );
//                   }
//                 });
//               });
//           });
//       });
//   });
// });

// describe("[ **JOB TWO** ] 1 INDUSTRY, 1 LOCATION, 1 COMPANY & 1 TITLE", () => {
//   it("Formula: Current Title & Current Location & Current Company OR Current Industry", () => {
//     cy.request(
//       "POST",
//       "https://ahyyqcbtwoiz3xuj5ciydju5fi0txiqp.lambda-url.us-east-1.on.aws/",
//       {
//         body: {
//           query: {
//             term: {
//               publicIdentifier: {
//                 value: identifer,
//               },
//             },
//           },
//         },
//         index: "profiles",
//       }
//     )
//       .then((res) => {
//         const result = res?.body?.hits?.hits[0]?._source;
//         if (result?.publicIdentifier == identifer) {
//           expect(result?.publicIdentifier).to.equal(identifer);
//           console.log("Profle found in ES of QLU 2.. Pass");
//         }
//         return result;
//       })
//       .then((result) => {
//         cy.log("User Title: " + result?.experience[0]?.title);
//         cy.log(
//           "User Current Location: " + result?.locationFullPath ||
//             result?.experience[0]?.location
//         );
//         let speacility_industry = "";
//         if (result.experience[0].companySpecialities[1] !== undefined) {
//           speacility_industry += result.experience[0].companySpecialities[1];
//           cy.log("Current Speciality+1: " + speacility_industry);
//         } else {
//           speacility_industry += result?.experience[0]?.industries[0];
//           cy.log("Current industry: " + speacility_industry);
//         }
//         cy.log("User Current Co.: " + result?.experience[0]?.universalName);

//         cy.request({
//           method: "POST",
//           url: "https://9w8wzjivr9.execute-api.us-east-1.amazonaws.com/scorev2",
//           body: {
//             profileNames: {
//               isSelected: [result?.fullName],
//               isRemoved: [],
//             },
//             jobTitles: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     name: result?.experience[0]?.title,
//                     min: 1,
//                     max: 50000000,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             managementTitles: {
//               isSelected: ["Head", "Owner"],
//               isRemoved: ["Founder"],
//               isStrict: false,
//             },
//             experience: {
//               total: {
//                 min: 1,
//                 max: 10,
//               },
//               relevant: {
//                 min: 1,
//                 max: 10,
//               },
//             },
//             education: {
//               degree: {
//                 isStrict: true,
//                 isSelected: ["bachelors", "masters"],
//                 isRemoved: [],
//               },
//               major: {
//                 isStrict: true,
//                 isSelected: ["computer science", "business"],
//                 isRemoved: [],
//               },
//             },
//             industries: {
//               isStrict: false,
//               isSelected: speacility_industry,
//               isRemoved: [],
//             },
//             skills: {
//               isStrict: false,
//               isSelected: ["JS", "Python"],
//               isRemoved: [],
//             },
//             company: {
//               current: {
//                 isSelected: [
//                   {
//                     universalName: result?.experience[0]?.universalName,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               companySizes: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               currentCompanyExperience: {},
//               previous: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             locations: {
//               current: {
//                 isStrict: false,
//                 isSelected: [result?.locationFullPath] || [
//                   result?.experience[0]?.location,
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               zipCodes: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             isTitleSelected: true,
//             isCompanySearchSelected: true,
//             isManagementLevelSelected: false,
//             isLocationSelected: false,
//             isExperienceSelected: false,
//             isIndustrySelected: true,
//             isEducationSelected: false,
//             isSkillSelected: false,
//             isProfileNameSelected: true,
//           },
//         })
//           .then((res) => {
//             const result2 = res.body.result;
//             return result2;
//           })
//           .then((result2) => {
//             cy.log("Total Profile fetched: " + result2?.length || 0);
//             cy.request({
//               method: "POST",
//               url: "http://api.theqlu.com/es/qsearchProfileByEsId",
//               body: result2,
//               headers: {
//                 Authorization: "Bearer " + token,
//               },
//             })
//               .then((res) => {
//                 console.log("Total ES Profile's", res);
//                 const profileResponse = res.body.response;
//                 return profileResponse;
//               })
//               .then((profileResponse) => {
//                 profileResponse.find((val, key) => {
//                   if (val.publicIdentifier == identifer) {
//                     expect(val.publicIdentifier).to.equal(identifer);
//                     cy.log(
//                       "Profile Found: " + key + " " + val.publicIdentifier
//                     );
//                   }
//                 });
//               });
//           });
//       });
//   });
// });

// describe("[ **JOB THREE** ] ", () => {
//   it("Filter: Current title - Current company - Current Name", () => {
//     cy.request(
//       "POST",
//       "https://ahyyqcbtwoiz3xuj5ciydju5fi0txiqp.lambda-url.us-east-1.on.aws/",
//       {
//         body: {
//           query: {
//             term: {
//               publicIdentifier: {
//                 value: identifer,
//               },
//             },
//           },
//         },
//         index: "profiles",
//       }
//     )
//       .then((res) => {
//         // console.log(res.body.hits.hits[0]._source)
//         const result = res?.body?.hits?.hits[0]?._source;
//         // console.log(result);
//         if (result?.publicIdentifier == identifer) {
//           console.log("Profle found in ES of QLU 2.. Pass");
//         } else {
//           console.log("Profle not found in ES of QLU 2.. Fail");
//         }
//         return result;
//       })
//       .then((result) => {
//         cy.log("User Title: " + result?.experience[0]?.title);
//         cy.log("User FullName: " + result?.fullName);
//         cy.log(
//           "User Current Company: " + result?.experience[0]?.universalName ||
//             result?.experience[0]?.location
//         );

//         cy.request({
//           method: "POST",
//           url: "https://9w8wzjivr9.execute-api.us-east-1.amazonaws.com/scorev2",
//           body: {
//             profileNames: {
//               isSelected: [result?.fullName],
//               isRemoved: [],
//             },
//             jobTitles: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     name: result?.experience[0]?.title,
//                     min: 1,
//                     max: 50000000,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             managementTitles: {
//               isSelected: ["Head", "Owner"],
//               isRemoved: ["Founder"],
//               isStrict: false,
//             },
//             experience: {
//               total: {
//                 min: 1,
//                 max: 10,
//               },
//               relevant: {
//                 min: 1,
//                 max: 10,
//               },
//             },
//             education: {
//               degree: {
//                 isStrict: true,
//                 isSelected: ["bachelors", "masters"],
//                 isRemoved: [],
//               },
//               major: {
//                 isStrict: true,
//                 isSelected: ["computer science", "business"],
//                 isRemoved: [],
//               },
//             },
//             industries: {
//               isStrict: false,
//               isSelected: result?.experience[0]?.companySpecialities[1],
//               isRemoved: [],
//             },
//             skills: {
//               isStrict: false,
//               isSelected: ["JS", "Python"],
//               isRemoved: [],
//             },
//             company: {
//               current: {
//                 isSelected: [
//                   {
//                     universalName: result?.experience[0]?.universalName,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               companySizes: {
//                 isSelected: [
//                   {
//                     universalName: result?.experience[1]?.universalName,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               currentCompanyExperience: {},
//               previous: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             locations: {
//               current: {
//                 isStrict: false,
//                 isSelected: [result?.locationFullPath] || [
//                   result?.experience[0]?.location,
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               zipCodes: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             isTitleSelected: true,
//             isCompanySearchSelected: true,
//             isManagementLevelSelected: false,
//             isLocationSelected: false,
//             isExperienceSelected: false,
//             isIndustrySelected: false,
//             isEducationSelected: false,
//             isSkillSelected: false,
//             isProfileNameSelected: true,
//           },
//         })
//           .then((res) => {
//             const result2 = res.body.result;
//             return result2;
//           })
//           .then((result2) => {
//             cy.log("Total Profile fetched: " + result2?.length || 0);
//             cy.request({
//               method: "POST",
//               url: "http://api.theqlu.com/es/qsearchProfileByEsId",
//               body: result2,
//               headers: {
//                 Authorization: "Bearer " + token,
//               },
//             })
//               .then((res) => {
//                 const profileResponse = res.body.response;
//                 console.log(profileResponse);
//                 return profileResponse;
//               })
//               .then((profileResponse) => {
//                 profileResponse.find((val, key) => {
//                   if (val.publicIdentifier == identifer) {
//                     expect(val.publicIdentifier).to.equal(identifer);
//                     cy.log(
//                       "Profile Found: " + key + " " + val.publicIdentifier
//                     );
//                   }
//                 });
//               });
//           });
//       });
//   });
// });

// describe(" [ ** JOB FOUR ** ]  ", () => {
//   it("Filter = 1 Speacility / Industry, Current title, currrent company, Full Name", () => {
//     cy.request(
//       "POST",
//       "https://ahyyqcbtwoiz3xuj5ciydju5fi0txiqp.lambda-url.us-east-1.on.aws/",
//       {
//         body: {
//           query: {
//             term: {
//               publicIdentifier: {
//                 value: identifer,
//               },
//             },
//           },
//         },
//         index: "profiles",
//       }
//     )
//       .then((res) => {
//         const result = res?.body?.hits?.hits[0]?._source;
//         if (result?.publicIdentifier == identifer) {
//           expect(result?.publicIdentifier).to.equal(identifer);
//           console.log("Profle found in ES of QLU 2.. Pass");
//         }
//         return result;
//       })
//       .then((result) => {
//         cy.log("Current Title: " + result?.experience[0]?.title);
//         cy.log("User FullName: " + result?.fullName);
//         cy.log("User Current Company: " + result?.experience[0]?.universalName);
//         let speacility_industry = "";
//         if (result.experience[0].companySpecialities[1] !== undefined) {
//           speacility_industry += result.experience[0].companySpecialities[1];
//           cy.log("Current Speciality+1: " + speacility_industry);
//         } else {
//           speacility_industry += result?.experience[0]?.industries[0];
//           cy.log("Current industry: " + speacility_industry);
//         }

//         cy.request({
//           method: "POST",
//           url: "https://9w8wzjivr9.execute-api.us-east-1.amazonaws.com/scorev2",
//           body: {
//             profileNames: {
//               isSelected: [result?.fullName],
//               isRemoved: [],
//             },
//             jobTitles: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     name: result?.experience[0]?.title,
//                     min: 1,
//                     max: 50000000,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             managementTitles: {
//               isSelected: ["Head", "Owner"],
//               isRemoved: ["Founder"],
//               isStrict: false,
//             },
//             experience: {
//               total: {
//                 min: 1,
//                 max: 10,
//               },
//               relevant: {
//                 min: 1,
//                 max: 10,
//               },
//             },
//             education: {
//               degree: {
//                 isStrict: true,
//                 isSelected: ["bachelors", "masters"],
//                 isRemoved: [],
//               },
//               major: {
//                 isStrict: true,
//                 isSelected: ["computer science", "business"],
//                 isRemoved: [],
//               },
//             },
//             industries: {
//               isStrict: false,
//               isSelected: speacility_industry,
//               isRemoved: [],
//             },
//             skills: {
//               isStrict: false,
//               isSelected: ["JS", "Python"],
//               isRemoved: [],
//             },
//             company: {
//               current: {
//                 isSelected: [
//                   {
//                     universalName: result?.experience[0]?.universalName,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               companySizes: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               currentCompanyExperience: {},
//               previous: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             locations: {
//               current: {
//                 isStrict: false,
//                 isSelected: [result?.locationFullPath] || [
//                   result?.experience[0]?.location,
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               zipCodes: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             isTitleSelected: true,
//             isCompanySearchSelected: true,
//             isManagementLevelSelected: false,
//             isLocationSelected: false,
//             isExperienceSelected: false,
//             isIndustrySelected: true,
//             isEducationSelected: false,
//             isSkillSelected: false,
//             isProfileNameSelected: true,
//           },
//         })
//           .then((res) => {
//             const result2 = res.body.result;
//             return result2;
//           })
//           .then((result2) => {
//             cy.log("Total Profile Found: ", +result2.length);
//             cy.request({
//               method: "POST",
//               url: "http://api.theqlu.com/es/qsearchProfileByEsId",
//               body: result2,
//               headers: {
//                 Authorization: "Bearer " + token,
//               },
//             })
//               .then((res) => {
//                 const profileResponse = res.body.response;
//                 console.log(profileResponse);
//                 return profileResponse;
//               })
//               .then((profileResponse) => {
//                 profileResponse.find((val, key) => {
//                   if (val.publicIdentifier == identifer) {
//                     expect(val.publicIdentifier).to.equal(identifer);
//                     cy.log(
//                       "Profile Found: " + key + " " + val.publicIdentifier
//                     );
//                   }
//                 });
//               });
//           });
//       });
//   });
// });

// describe("[ **JOB FIVE** ]", () => {
//   it("Filter =  Current Speacility+3, Current title,current Location ", () => {
//     cy.request(
//       "POST",
//       "https://ahyyqcbtwoiz3xuj5ciydju5fi0txiqp.lambda-url.us-east-1.on.aws/",
//       {
//         body: {
//           query: {
//             term: {
//               publicIdentifier: {
//                 value: identifer,
//               },
//             },
//           },
//         },
//         index: "profiles",
//       }
//     )
//       .then((res) => {
//         // console.log(res.body.hits.hits[0]._source)
//         const result = res?.body?.hits?.hits[0]?._source;
//         // console.log(result);
//         if (result?.publicIdentifier == identifer) {
//           console.log("Profle found in ES of QLU 2.. Pass");
//         } else {
//           console.log("Profle not found in ES of QLU 2.. Fail");
//         }

//         return result;
//       })
//       .then((result) => {
//         let speacility_industry = "";
//         if (result.experience[0].companySpecialities[2] !== undefined) {
//           speacility_industry += result.experience[0].companySpecialities[2];
//           cy.log("Current Speciality+1: " + speacility_industry);
//         } else {
//           speacility_industry += result?.experience[0]?.industries[0];
//           cy.log("Current industry: " + speacility_industry);
//         }
//         cy.log("User Title: " + result?.experience[0]?.title);
//         cy.log(
//           "User Current Location: " + result?.locationFullPath ||
//             result?.experience[0]?.location
//         );
//         cy.request({
//           method: "POST",
//           url: "https://9w8wzjivr9.execute-api.us-east-1.amazonaws.com/scorev2",
//           body: {
//             profileNames: {
//               isSelected: ["David Reinke"],
//               isRemoved: [],
//             },
//             jobTitles: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     name: result?.experience[0]?.title,
//                     min: 1,
//                     max: 50000000,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             managementTitles: {
//               isSelected: [],
//               isRemoved: [],
//             },
//             experience: {
//               total: {
//                 min: 1,
//                 max: 3,
//               },
//               relevant: {},
//             },
//             education: {
//               degree: {
//                 isSelected: ["Bachelor"],
//                 isRemoved: [],
//               },
//               major: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             industries: {
//               isStrict: false,
//               isSelected: [speacility_industry],
//               isRemoved: [],
//             },
//             skills: {
//               isStrict: false,
//               isSelected: ["E-Commerce"],
//               isRemoved: [],
//             },
//             company: {
//               current: {
//                 isStrict: false,
//                 isSelected: ["boomi-inc"],
//                 isRemoved: [],
//               },
//               companySizes: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               currentCompanyExperience: {},
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             locations: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   result?.locationFullPath || result?.experience[0]?.location,
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             AssignmentProfilesIds: [],
//             isTitleSelected: true,
//             isCompanySearchSelected: false,
//             isManagementLevelSelected: false,
//             isLocationSelected: true,
//             isExperienceSelected: false,
//             isIndustrySelected: true,
//             isEducationSelected: false,
//             isSkillSelected: false,
//             isProfileNameSelected: false,
//             isAssignmentSelected: false,
//           },
//         })
//           .then((res) => {
//             console.log("##############", res);
//             const result2 = res.body.result;
//             return result2;
//           })
//           .then((result2) => {
//             cy.log("Total Profile fetched: " + result2?.length || 0);
//             cy.request({
//               method: "POST",
//               url: "http://api.theqlu.com/es/qsearchProfileByEsId",
//               body: result2,
//               headers: {
//                 Authorization: "Bearer " + token,
//               },
//             })
//               .then((res) => {
//                 console.log("Total ES Profile's", res);
//                 const profileResponse = res.body.response;
//                 return profileResponse;
//               })
//               .then((profileResponse) => {
//                 profileResponse.find((val, key) => {
//                   if (val.publicIdentifier == identifer) {
//                     expect(val.publicIdentifier).to.equal(identifer);
//                     cy.log(
//                       "Profile Found: " + key + " " + val.publicIdentifier
//                     );
//                   }
//                 });
//               });
//           });
//       });
//   });
// });

// describe("[ **JOB SIX** ]", () => {
//   it("Formula: Current Title & Current Company OR Past Company", () => {
//     cy.request(
//       "POST",
//       "https://ahyyqcbtwoiz3xuj5ciydju5fi0txiqp.lambda-url.us-east-1.on.aws/",
//       {
//         body: {
//           query: {
//             term: {
//               publicIdentifier: {
//                 value: identifer,
//               },
//             },
//           },
//         },
//         index: "profiles",
//       }
//     )
//       .then((res) => {
//         // console.log(res.body.hits.hits[0]._source)
//         const result = res?.body?.hits?.hits[0]?._source;
//         // console.log(result);
//         if (result?.publicIdentifier == identifer) {
//           console.log("Profle found in ES of QLU 2.. Pass");
//         } else {
//           console.log("Profle not found in ES of QLU 2.. Fail");
//         }

//         return result;
//       })
//       .then((result) => {
//         cy.log("User Title: " + result?.experience[0]?.title);
//         cy.log(
//           "User Current Location: " + result?.locationFullPath ||
//             result?.experience[0]?.location
//         );
//         cy.log("User Current Co.: " + result?.experience[0]?.universalName);
//         cy.log("User Company-1: " + result?.experience[1]?.universalName);

//         cy.request({
//           method: "POST",
//           url: "https://9w8wzjivr9.execute-api.us-east-1.amazonaws.com/scorev2",

//           body: {
//             profileNames: {
//               isSelected: [[result?.fullName]],
//               isRemoved: [],
//             },
//             jobTitles: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     name: result?.experience[0]?.title,
//                     min: 1,
//                     max: 50000000,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             managementTitles: {
//               isSelected: [],
//               isRemoved: [],
//             },
//             experience: {
//               total: {
//                 min: 1,
//                 max: 3,
//               },
//               relevant: {},
//             },
//             education: {
//               degree: {
//                 isSelected: ["Bachelor"],
//                 isRemoved: [],
//               },
//               major: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             industries: {
//               isStrict: false,
//               isSelected: [
//                 result?.experience[0]?.companySpecialities[0] ||
//                   result?.experience[0]?.industries[0],
//               ],
//               isRemoved: [],
//             },
//             skills: {
//               isStrict: false,
//               isSelected: ["E-Commerce"],
//               isRemoved: [],
//             },
//             company: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     universalName: result?.experience[0]?.universalName,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               companySizes: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               currentCompanyExperience: {},
//               previous: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     universalName: result?.experience[1]?.universalName,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//             },
//             locations: {
//               current: {
//                 isStrict: false,
//                 isSelected: [result?.locationFullPath] || [
//                   result?.experience[0]?.location,
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             AssignmentProfilesIds: [],
//             isTitleSelected: true,
//             isCompanySearchSelected: true,
//             isManagementLevelSelected: false,
//             isLocationSelected: false,
//             isExperienceSelected: false,
//             isIndustrySelected: false,
//             isEducationSelected: false,
//             isSkillSelected: false,
//             isProfileNameSelected: false,
//             isAssignmentSelected: false,
//           },
//         })
//           .then((res) => {
//             // cy.log(res);
//             const result2 = res.body.result;
//             // console.log("IDs: ", result);

//             return result2;
//           })
//           .then((result2) => {
//             cy.log("Total Profile fetched: " + result2?.length || 0);
//             cy.request({
//               method: "POST",
//               url: "http://api.theqlu.com/es/qsearchProfileByEsId",
//               body: result2,
//               headers: {
//                 Authorization: "Bearer " + token,
//               },
//             })
//               .then((res) => {
//                 console.log("Total ES Profile's", res);
//                 const profileResponse = res.body.response;
//                 return profileResponse;
//               })
//               .then((profileResponse) => {
//                 profileResponse.find((val, key) => {
//                   if (val.publicIdentifier == identifer) {
//                     expect(val.publicIdentifier).to.equal(identifer);
//                     cy.log(
//                       "Profile Found: " + key + " " + val.publicIdentifier
//                     );
//                   }
//                 });
//               });
//           });
//       });
//   });
// });

// describe("[ **JOB SEVEN** ]", () => {
//   it("Filter: Current Title & All Current Specialty", () => {
//     cy.request(
//       "POST",
//       "https://ahyyqcbtwoiz3xuj5ciydju5fi0txiqp.lambda-url.us-east-1.on.aws/",
//       {
//         body: {
//           query: {
//             term: {
//               publicIdentifier: {
//                 value: identifer,
//               },
//             },
//           },
//         },
//         index: "profiles",
//       }
//     )
//       .then((res) => {
//         // console.log(res.body.hits.hits[0]._source)
//         const result = res?.body?.hits?.hits[0]?._source;
//         // console.log(result);
//         if (result?.publicIdentifier == identifer) {
//           console.log("Profle found in ES of QLU 2.. Pass");
//         } else {
//           console.log("Profle not found in ES of QLU 2.. Fail");
//         }

//         return result;
//       })
//       .then((result) => {
//         let speacility_industry = "";
//         if (result.experience[0].companySpecialities[1] !== undefined) {
//           speacility_industry += result.experience[0].companySpecialities[1];
//           cy.log("Current Speciality+1: " + speacility_industry);
//         } else {
//           speacility_industry += result?.experience[0]?.industries[0];
//           cy.log("Current industry: " + speacility_industry);
//         }
//         cy.log("User Title: " + result?.experience[0]?.title);

//         cy.request({
//           method: "POST",
//           url: "https://9w8wzjivr9.execute-api.us-east-1.amazonaws.com/scorev2",
//           body: {
//             profileNames: {
//               isSelected: ["David Reinke"],
//               isRemoved: [],
//             },
//             jobTitles: {
//               current: {
//                 isStrict: false,
//                 isSelected: [
//                   {
//                     name: result?.experience[0]?.title,
//                     min: 1,
//                     max: 50000000,
//                   },
//                 ],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             managementTitles: {
//               isSelected: [],
//               isRemoved: [],
//             },
//             experience: {
//               total: {
//                 min: 1,
//                 max: 3,
//               },
//               relevant: {},
//             },
//             education: {
//               degree: {
//                 isSelected: ["Bachelor"],
//                 isRemoved: [],
//               },
//               major: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             industries: {
//               isStrict: false,
//               isSelected: [speacility_industry],
//               isRemoved: [],
//             },
//             skills: {
//               isStrict: false,
//               isSelected: ["E-Commerce"],
//               isRemoved: [],
//             },
//             company: {
//               current: {
//                 isStrict: false,
//                 isSelected: ["five-below"],
//                 isRemoved: [],
//               },
//               companySizes: {
//                 isSelected: [],
//                 isRemoved: [],
//               },
//               currentCompanyExperience: {},
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             locations: {
//               current: {
//                 isStrict: false,
//                 isSelected: ["San Francisco Bay Area, United States"],
//                 isRemoved: [],
//               },
//               previous: {
//                 isStrict: false,
//                 isSelected: [],
//                 isRemoved: [],
//               },
//             },
//             AssignmentProfilesIds: [],
//             isTitleSelected: true,
//             isCompanySearchSelected: false,
//             isManagementLevelSelected: false,
//             isLocationSelected: false,
//             isExperienceSelected: false,
//             isIndustrySelected: true,
//             isEducationSelected: false,
//             isSkillSelected: false,
//             isProfileNameSelected: false,
//             isAssignmentSelected: false,
//           },
//         })
//           .then((res) => {
//             console.log("!!!!!!!!!!!!!!!!!!!!!!!", res);
//             const result2 = res.body.result;
//             return result2;
//           })
//           .then((result2) => {
//             cy.log("Total Profile fetched: " + result2?.length || 0);
//             cy.request({
//               method: "POST",
//               url: "http://api.theqlu.com/es/qsearchProfileByEsId",
//               body: result2,
//               headers: {
//                 Authorization: "Bearer " + token,
//               },
//             })
//               .then((res) => {
//                 console.log("Total ES Profile's", res);
//                 const profileResponse = res.body.response;
//                 return profileResponse;
//               })
//               .then((profileResponse) => {
//                 profileResponse.filter((val, key) => {
//                   if (val.publicIdentifier == identifer) {
//                     expect(val.publicIdentifier).to.equal(identifer);
//                     cy.log(
//                       "Profile Found: " + key + " " + val.publicIdentifier
//                     );
//                   } else {
//                     cy.log("Not Found");
//                   }
//                 });
//               });
//           });
//       });
//   });
// });

describe("[ **JOB EIGHT** ]", () => {
  it("NAME", () => {
    cy.request(
      "POST",
      "https://ahyyqcbtwoiz3xuj5ciydju5fi0txiqp.lambda-url.us-east-1.on.aws/",
      {
        body: {
          query: {
            term: {
              publicIdentifier: {
                value: identifer,
              },
            },
          },
        },
        index: "profiles",
      }
    )
      .then((res) => {
        // console.log(res.body.hits.hits[0]._source)
        const result = res.body.hits.hits[0]._source;
        // console.log(result);
        if (result.publicIdentifier == identifer) {
          console.log("Profle found in ES of QLU 2.. Pass");
        } else {
          console.log("Profle not found in ES of QLU 2.. Fail");
        }
        return result;
      })
      .then((result) => {
        cy.request({
          method: "POST",
          url: "https://9w8wzjivr9.execute-api.us-east-1.amazonaws.com/scorev2",
          body: {
            profileNames: {
              isSelected: [result.fullName],
              isRemoved: [],
            },
            jobTitles: {
              current: {
                isStrict: false,
                isSelected: [
                  {
                    name: "deep learning engineer",
                    min: 1,
                    max: 1000001,
                  },
                  {
                    name: "chief finance officer",
                    min: 1,
                    max: 1000001,
                  },
                  {
                    name: "software engineer",
                    min: 1,
                    max: 1000001,
                  },
                ],
                isRemoved: [],
              },
              previous: {
                isStrict: false,
                isSelected: [],
                isRemoved: [],
              },
            },
            managementTitles: {
              isSelected: ["Head", "Owner"],
              isRemoved: ["Founder"],
              isStrict: false,
            },
            experience: {
              total: {
                min: 1,
                max: 10,
              },
              relevant: {
                min: 1,
                max: 10,
              },
            },
            education: {
              degree: {
                isStrict: true,
                isSelected: ["bachelors", "masters"],
                isRemoved: [],
              },
              major: {
                isStrict: true,
                isSelected: ["computer science", "business"],
                isRemoved: [],
              },
            },
            industries: {
              isStrict: false,
              isSelected: ["mobile devices"],
              isRemoved: [],
            },
            skills: {
              isStrict: false,
              isSelected: ["JS", "Python"],
              isRemoved: [],
            },
            company: {
              current: {
                isSelected: [
                  {
                    universalName: "boomi-inc",
                  },
                ],
                isRemoved: [],
              },
              companySizes: {
                isSelected: [],
                isRemoved: [],
              },
              currentCompanyExperience: {},
              previous: {
                isSelected: [],
                isRemoved: [],
              },
            },
            locations: {
              current: {
                isStrict: false,
                isSelected: ["Islāmābād, Pakistan"],
                isRemoved: [],
              },
              previous: {
                isStrict: false,
                isSelected: [],
                isRemoved: [],
              },
              zipCodes: {
                isStrict: false,
                isSelected: [],
                isRemoved: [],
              },
            },
            isTitleSelected: false,
            isCompanySearchSelected: false,
            isManagementLevelSelected: false,
            isLocationSelected: false,
            isExperienceSelected: false,
            isIndustrySelected: false,
            isEducationSelected: false,
            isSkillSelected: false,
            isProfileNameSelected: true,
          },
        })
          .then((res) => {
            const result2 = res.body.result;
            return result2;
          })
          .then((result2) => {
            cy.log("Total Profile Found", result2.length);
            cy.request({
              method: "POST",
              url: "http://api.theqlu.com/es/qsearchProfileByEsId",
              body: result2,
              headers: {
                Authorization: "Bearer " + token,
              },
            })
              .then((res) => {
                const profileResponse = res.body.response;
                console.log(profileResponse);
                return profileResponse;
              })
              .then((profileResponse) => {
                profileResponse.filter((val, key) => {
                  console.log(val.publicIdentifier);
                  if (val.publicIdentifier == identifer) {
                    expect(val.publicIdentifier).to.equal(identifer);
                    cy.log(
                      "Profile Found: " + key + " " + val.publicIdentifier
                    );
                  }
                });
              });
          });
      });
  });
});
