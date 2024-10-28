import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { FaHome, FaChartBar, FaBell, FaCog, FaUser } from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';

// Sample Data for Charts
const marketTrendData = [
  { name: 'Jan', position: 4000, market: 2400 },
  { name: 'Feb', position: 3000, market: 1398 },
  { name: 'Mar', position: 5000, market: 4500 },
  { name: 'Apr', position: 2780, market: 3908 },
  { name: 'May', position: 1890, market: 4800 },
];
const trendingData = [
  { name: 'Wooden Floor', value: 49 },
  { name: 'Pattern Tiles', value: 32 },
  { name: 'Stone Textured Tiles', value: 27 },
];
const visibilityData = [
  { name: 'Jan', impressions: 4000, views: 2400, clicks: 822 },
  { name: 'Feb', impressions: 3000, views: 1398, clicks: 632 },
  { name: 'Mar', impressions: 5000, views: 2000, clicks: 1042 },
];

// Main Dashboard Component
const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>LOGO</Logo>
        <NavItem><FaHome /> Home</NavItem>
        <NavItem><FaChartBar /> Analytics</NavItem>
        <NavItem><FaBell /> Notifications</NavItem>
        <NavItem><FaCog /> Settings</NavItem>
        <ProfileIcon><Avatar src='data:image/jpeg;base64,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'></Avatar>
        </ProfileIcon>
      </Sidebar>

      <Content>
        <TopBar>
          <Title>Dashboard</Title>
          <TabButtons>
            <TabButton active>Market Analysis</TabButton>
            <TabButton>Performance</TabButton>
          </TabButtons>
          <ActionButtons>
            <button>Customize</button>
            <button>Export</button>
          </ActionButtons>
        </TopBar>

        <DashboardContent>
          <TopPanel>
            <MetricBox>
              <h3>Today's Revenue</h3>
              <p>$1,280</p>
              <small>↑ 15% last month</small>
            </MetricBox>
            <MetricBox>
              <h3>Today's Orders</h3>
              <p>14</p>
              <small>↑ 10% last month</small>
            </MetricBox>
            <MetricBox>
              <h3>Avg. Order Value</h3>
              <p>$91.42</p>
              <small>↑ 20% last month</small>
            </MetricBox>
          </TopPanel>

          <MainContent>
            <IndustryOpportunities>
              <h2>Industry Opportunities</h2>
              <GaugePlaceholder>44% more opportunities in market</GaugePlaceholder>
              <Legend>
                <span>Your Position in Market</span>
                <span>Total Market Opportunities</span>
                <span>Achievable Market Opportunities</span>
              </Legend>
            </IndustryOpportunities>

            <MarketTrend>
              <h2>Current Market Trend</h2>
              <LineChart width={300} height={100} data={marketTrendData}>
                <Line type="monotone" dataKey="position" stroke="#8884d8" />
                <Line type="monotone" dataKey="market" stroke="#82ca9d" />
              </LineChart>
            </MarketTrend>

            <TrendingInIndustry>
              <h2>Trending in Your Industry</h2>
              <PieChart width={200} height={200}>
                <Pie data={trendingData} dataKey="value" outerRadius={80}>
                  <Cell fill="#8884d8" />
                  <Cell fill="#82ca9d" />
                  <Cell fill="#ffc658" />
                </Pie>
              </PieChart>
            </TrendingInIndustry>

            <Visibility>
              <h2>Visibility</h2>
              <LineChart width={300} height={100} data={visibilityData}>
                <Line type="monotone" dataKey="impressions" stroke="#8884d8" />
                <Line type="monotone" dataKey="views" stroke="#82ca9d" />
                <Line type="monotone" dataKey="clicks" stroke="#ffc658" />
              </LineChart>
            </Visibility>
          </MainContent>
        </DashboardContent>
      </Content>
    </DashboardContainer>
  );
};

// Styled Components for the Dashboard Layout
const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 80px;
  background-color: #2e3a59;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: space-around;
  }
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin: 20px 0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #8892b0;
  }

  @media (max-width: 768px) {
    margin: 0;
    font-size: 15px;
  }
`;

const ProfileIcon = styled.div`
  margin-top: auto;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #8892b0;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const TabButtons = styled.div`
  display: flex;
`;

const TabButton = styled.button`
  background-color: ${({ active }) => (active ? '#5a67d8' : '#e2e8f0')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  padding: 8px 12px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ActionButtons = styled.div`
  button {
    margin-left: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #5a67d8;
    color: white;

    &:hover {
      background-color: #4c51bf;
    }
  }
`;

const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`;

const MetricBox = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 14px;
    color: #333;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  small {
    color: #4c51bf;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IndustryOpportunities = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const GaugePlaceholder = styled.div`
  width: 100%;
  height: 100px;
  background-color: #e9ecef;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4c51bf;
  font-weight: bold;
`;

const Legend = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  color: #666;
`;

const MarketTrend = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TrendingInIndustry = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Visibility = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default Dashboard;
