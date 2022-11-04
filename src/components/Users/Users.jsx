import React from "react";
import { Tab } from "@headlessui/react";
import styles, {
  buttonStyle,
  containerStyle,
  textStyles,
} from "../../assets/styles/globalStyles";

export default function Users() {

  return (
    <>
          <div className={`${containerStyle.mainContainer} `}>
            <div className="flex justify-between items-center">
              <h4 className={textStyles.mainHeading}>Users</h4>
              <div className="flex gap-2">
                <button className={buttonStyle.fillButton}>
                  Export PDF
                </button>
                <button className={buttonStyle.fillButton}>
                  Export CSV
                </button>
              </div>
            </div>
                <Tab.Group>
                  <Tab.List className="flex justify-between">
                    <div className="flex gap-3 ">
                      <Tab className={styles.tabStyles}>Active Users</Tab>
                      <Tab className={styles.tabStyles}>Inactive Users</Tab>
                    </div>
                  </Tab.List>
                  {/* Active Users Tab */}
                  <Tab.Panels className="mt-5">
                    <Tab.Panel>
                      <div className="flex flex-col my-2">
                        <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
                          <table className="w-full divide-y divide-gray-200 text-center ">
                            <thead className="bg-slate-700">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  FIRST NAME
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  LAST NAME
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  CLIQ ID
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  EMAIL
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  PHONE
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  ACTION
                                </th>
                              </tr>
                            </thead>
                                  <tbody className="bg-slate-300 divide-y divide-gray-200">
                                    <tr>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                          Test Data
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                          Test Data
                                        </div>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        Test Data
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                          Test Data
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                          Test Data
                                        </span>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a
                                          href="/dashboard"
                                          className={buttonStyle.outlineButton}
                                        >
                                          View Details
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                          </table>
                        </div>
                      </div>
                    </Tab.Panel>

                    {/* Inactive Users Tab */}
                    <Tab.Panel>
                      <div className="flex flex-col my-2">
                        <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
                          <table className="w-full divide-y divide-gray-200 text-center ">
                            <thead className="bg-slate-700">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  FIRST NAME
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  LAST NAME
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  CLIQ ID
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  EMAIL
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider"
                                >
                                  PHONE
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                  <span className="sr-only">Edit</span>
                                </th>
                              </tr>
                            </thead>
                                  <tbody className="bg-slate-300 divide-y divide-gray-200">
                                    <tr>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                          Test Data
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                          Test Data
                                        </div>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        Test Data
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                         Test Data
                                        </div>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                          Successful
                                        </span>
                                      </td>
                                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a
                                          href="/dashboard"
                                          className={buttonStyle.outlineButton}
                                        >
                                          View Details
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                          </table>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>

                {/* Pagination goes here */}

                <div className="pagination flex gap-2">
                  <button
                    className={buttonStyle.fillButton}
                  >
                    Prev
                  </button>
                  <button
                    className={buttonStyle.fillButton}
                  >
                    Next
                  </button>
                </div>
          </div>
    </>
  );
}
