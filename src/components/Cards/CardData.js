import { Grid, Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Icon } from "@iconify/react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const CardData = ({ plan, card, handleOpenModal, classfeature, classfeaturelist, titleclass }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  console.log("hte plain data are shown here : ",plan.Icon);
  return (
    <>
      <Grid item key={plan.title}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className={card}
            style={{
              // backgroundColor: "#002638",
              // background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)',


              cursor: "pointer",
            }}
            onClick={() => handleOpenModal(plan)}
          >
            <CardContent style={{ width: "90%" }}>
              <Typography className={titleclass}>{plan.title}</Typography>
              <Icon icon={plan.Icon} style={{
                fontSize: "100px",
                color: "white ",
                // color: "#3770FF"
              }} />
              <div style={{ paddingTop: "12px" }}>
                <Typography
                  style={{
                    fontFamily:
                      'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 700,
                    fontSize: "26px",
                    lineHeight: "40px",
                    color: "#ffffff",
                  }}
                >
                  Features
                </Typography>
              </div>
              <div className={classfeaturelist} >
                {plan.features.map((feature, index) => (
                  <Typography key={index} className={classfeature}>
                    <span role="img" aria-label="Checkmark">
                      ✔️
                    </span>
                    <span style={{ marginLeft: "4px" }}>{feature}</span>
                  </Typography>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    </>
  )
}

export default CardData