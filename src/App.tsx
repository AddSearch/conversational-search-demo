import React from 'react';
import { AddSearchUiIntegration } from 'react-addsearch-ui';
import 'react-addsearch-ui/dist/style.css';

const DEFAULT_INDEX = '490c606d6377e1876fa7fecb5f7e6420';

const DemoIndexInput: React.FC<{ readonly setCurrentIndex: (index: string) => void }> = ({
    setCurrentIndex
}) => {
    const [indexInputValue, setIndexInputValue] = React.useState<string>(DEFAULT_INDEX);

    return (
        <div className="text-white flex items-center gap-2 w-full">
            <span>Currently used index: </span>
            <input
                style={{ width: '350px' }}
                type="text"
                value={indexInputValue}
                onChange={(e) => setIndexInputValue(e.target.value)}
                className="text-gray-800 border border-gray-300 rounded-md px-4 py-2 "
            />
            <button
                onClick={() => setCurrentIndex(indexInputValue)}
                className="rounded-md border-2 border-white text-white px-4 py-2"
            >
                Apply Index
            </button>
        </div>
    );
};

export const App: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState<string>(DEFAULT_INDEX);

    return (
        <div>
            <div className="flex flex-col gap-4 p-4  bg-[#fd564d] mb-6">
                <h1 className="text-white text-3xl font-bold">
                    AddSearch Demo (incl. Conversational Search)
                </h1>
                <DemoIndexInput setCurrentIndex={setCurrentIndex} />
            </div>
            <div>
                <AddSearchUiIntegration
                    key={currentIndex}
                    publicSiteKey={currentIndex}
                    primaryColor="#fd564d"
                    customFont="Poppins"
                    searchFieldMaxWidthInPixels={600}
                    searchFieldHeaderText="Search"
                    searchButtonText="Search"
                    searchInputPlaceholderText="What are you looking for?"
                    hasSearchInputAutofocus={true}
                    hasSearchAsYouType={false}
                    minLengthToShowSearchAsYouTypeResults={1}
                    hasSearchInputFieldIcon={true}
                    hasAutocomplete={true}
                    hasConversationalSearch={true}
                    loadMoreResults="button"
                    filters={[
                        {
                            labelText: 'Categories',
                            type: 'checkbox-group',
                            options: {
                                pricing: {
                                    label: 'Pricing',
                                    filter: { category: '1xpricing' }
                                },
                                partners: {
                                    label: 'Partners',
                                    filter: { category: '1xpartners' }
                                },
                                customers: {
                                    label: 'Customers',
                                    filter: { category: '1xcustomers' }
                                }
                            }
                        },
                        {
                            // labelText: 'Documents',
                            type: 'tags',
                            options: {
                                nofilter: {
                                    label: 'All results'
                                },
                                blog: {
                                    label: 'Blog',
                                    filter: { category: '1xblog' }
                                },
                                docs: {
                                    label: 'Documentation',
                                    filter: { category: '1xdocs' }
                                }
                            }
                        }
                        // {
                        //     type: 'select-list',
                        //     options: {
                        //         nofilter: {
                        //             label: 'All results'
                        //         },
                        //         blog: {
                        //             label: 'Blog',
                        //             filter: { category: '1xblog' }
                        //         },
                        //         docs: {
                        //             label: 'Documentation',
                        //             filter: { category: '1xdocs' }
                        //         }
                        //     }
                        // }
                    ]}
                    hasActiveFilters={true}
                    sortByOptions={[
                        {
                            label: 'Most relevant first',
                            sortBy: 'relevance',
                            order: 'desc'
                        },
                        {
                            label: 'Date: Newest first',
                            sortBy: 'date',
                            order: 'desc'
                        },
                        {
                            label: 'Date: Oldest first',
                            sortBy: 'date',
                            order: 'asc'
                        },
                        {
                            label: 'Multiple sorting parameters',
                            sortBy: ['custom_fields.plan_name', 'date'],
                            order: ['desc', 'desc']
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default App;
