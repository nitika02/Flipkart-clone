import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productAction'
import {Box, Typography, Grid, styled} from "@mui/material"
import ActionItem from './ActionItem'

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`
const Container = styled(Grid)`
    background-color: #ffffff;
    display: flex;

`
const RightContainer = styled(Grid)`
  margin-top: 55px;
`

const DetailView = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const {loading, product} = useSelector(state => state.getProductDetails)
    useEffect(() => {
        if(product && id !==product.id)
        dispatch(getProductDetails(id))
    },[dispatch, id, product, loading])

    return (
      <Component>
        {
          product && Object.keys(product).length &&
              <Container container>
                  <Grid item lg={4} md={4} sm={8} xs={12}>
                      <ActionItem product={product} />
                  </Grid>
                  <RightContainer item lg={8} md={8} sm={8} xs={12}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography style={{marginTop: 5, color: "#878787", fontSize: 14}}>8 Ratings & 1 Reviews</Typography>
                    <Box component="span"><img src={fassured} alt="" style={{width: 77, marginLeft: 20}}/></Box>
                  </RightContainer>
              </Container>
        }
      </Component>
    )
}

export default DetailView