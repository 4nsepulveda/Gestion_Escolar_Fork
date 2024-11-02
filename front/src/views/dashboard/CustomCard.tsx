'use client'

// MUI Imports
import { useRouter } from 'next/navigation'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'

interface CardProps {
  imageUrl: string
  title: string
  description: string
  redirectUrl?: string
}

const CustomCard: React.FC<CardProps> = ({ imageUrl, title, description, redirectUrl }) => {
  const router = useRouter()

  const handleButtonClick = () => {
    if (redirectUrl) {
      router.push(redirectUrl)
    }
  }

  return (
    <Card>
      <CardMedia image={imageUrl} />
      <CardContent>
        <Typography variant='h5'>{title}</Typography>
      </CardContent>
      <Button variant='contained' fullWidth onClick={handleButtonClick}>
        Visit
      </Button>
    </Card>
  )
}

export default CustomCard