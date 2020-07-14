import React from 'react';
import Layout from '../../layout/Layout';
import './campaigns.css';




import CampaignsPanel from '../../components/CampaignsComp/campaigns-panel';
import CardType from '../../components/CampaignsComp/values/campaign-type-card';







const Campaigns = ({match}) => {

  const user =match.params;

  return (
    <Layout>
      <div className='instagram-page'>
        
        <div className='ig-header'>
          <h2>Instagram Campaign</h2>
        </div>

        <div className='ig-pagebody'>
          <div className='left'> 
          <p className='ig-campaign-instruction'>Choose a campaign and click change to modify your current Campaign Settings</p>
            <CampaignsPanel username={user.username} />
          <p className='ig-campaign-footer'>Campaigns are linked to Instagram stories only for the moment</p>
          </div>
          <div className='right'>
            <p>Current active campaign</p>

            <CardType username={user.username} />
          
          </div>
        </div>
      </div> 
    </Layout>
  );
};

export default Campaigns;



