import Header from '../common/Header'

import { Paper, Typography, TextField, Checkbox, Button, Divider, Box } from '@mui/material'
import { FacebookOutlined } from '@mui/icons-material'
import { Google } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Footer from '../common/Footer'
import FindJobSection from './FindJobSection'
import FeaturedServicesSection from './FeaturedServicesSection'
import TransitionsModal from './Modal'


function Order() {
  return (
    <>
      <Header />
      <FindJobSection />
      <FeaturedServicesSection />
      <TransitionsModal />
      <Footer />
    </>
  )
}

export default Order
