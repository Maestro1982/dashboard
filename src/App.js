import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  ECommerce,
  Orders,
  Calendar,
  Employees,
  StackedChart,
  PyramidChart,
  Customers,
  Kanban,
  AreaChart,
  BarChart,
  PieChart,
  FinancialChart,
  ColorPicker,
  ColorMappingChart,
  Editor,
  LineChart,
} from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <Router>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<ECommerce />} />
                <Route path='/ecommerce' element={<ECommerce />} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts */}
                <Route path='/line' element={<LineChart />} />
                <Route path='/area' element={<AreaChart />} />
                <Route path='/bar' element={<BarChart />} />
                <Route path='/pie' element={<PieChart />} />
                <Route path='/financial' element={<FinancialChart />} />
                <Route path='/color-mapping' element={<ColorMappingChart />} />
                <Route path='/pyramid' element={<PyramidChart />} />
                <Route path='/stacked' element={<StackedChart />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
