import Grid from '@mui/material/Grid'; // Grid version 1
// import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function About (){
  
<Grid container spacing={2} minHeight={160}>
  <Grid xs display="flex" justifyContent="center" alignItems="center">
    {/* <Avatar src="/static/images/avatar/1.jpg" /> */}
  </Grid>
  <Grid display="flex" justifyContent="center" alignItems="center">
    {/* <Avatar src="/static/images/avatar/2.jpg" /> */}
  </Grid>
  <Grid xs display="flex" justifyContent="center" alignItems="center">
    {/* <Avatar src="/static/images/avatar/3.jpg" /> */}
  </Grid>
</Grid>
}
export default About;