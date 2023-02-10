import React, { createContext, useState } from 'react';
export const UserContext = createContext();

const GembucketProvider = (props) => {
  const [data, setData] = useState({
    name: 'Gembucket',
    keyword: '',
    sumary: 'Tellus in sagittis dui vel nisl duis ac nibh fusce lacus'
        +' purus aliquet at neque aenean auctor gravida sem praesent'
        +' id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio	feugiat non pretium quis lectus suspendisse.',
    websites: 'https://gembucket.com',
    Ofiicalsite: '',

  });

  const handleKeywordChange = (e) => {
    setData({ ...data, keyword: e.target.value });
  };

  const handleOfficialSiteChange = (e) => {
    setData({ ...data, OfficialSite: e.target.value });
  };

  return (
    <UserContext.Provider value={{ data, setData }}>
      <div>
        <label htmlFor="keyword">Keyword:</label>
        <input type="text" id="keyword" value={data.keyword} onChange={handleKeywordChange} />
        <br />
        <label htmlFor="websites">Websites:</label>
        <select id="websites" value={data.websites} onChange={(e) => setData({ ...data, websites: e.target.value })}>
          <option value="https://gembucket.com">Gembucket</option>
          <option value="other">Other</option>
        </select>
        <br />
        <label htmlFor="OfficialSite">Official Site:</label>
        <select id="OfficialSite" value={data.OfficialSite} onChange={handleOfficialSiteChange}>
          <option value="">Select Official Site</option>
          <option value="https://gembucket.com">Gembucket</option>
          <option value="other">Other</option>
        </select>
        <br />
        {props.children}
      </div>
    </UserContext.Provider>
  );
};

export default GembucketProvider;
