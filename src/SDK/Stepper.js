import { Box, Grid, Stack, styled } from "@mui/material";
import { primary } from "./theme";

const CustomProjectStyle = styled(Box)(({ theme }) => ({
  ".stepper": {
    height: 6,
    width: 36,

    borderRadius: 8,
    margin: 4,
    background: primary.main,
  },
}));

export const CustomStepper = ({ ...props }) => {
  const { step, inputSteps } = props;

  const ListStepper = () => {
    let rows = [];
    for (let i = 1; i <= inputSteps; i++) {
      rows.push(
        <Stack
          key={i}
          className="stepper"
          style={{
            background: `${step === i ? primary?.fantaGrey : primary?.main}`,
            opacity: step === i ? 1 : 0.6,
          }}
        />
      );
    }
    return rows;
  };

  return (
    <CustomProjectStyle>
      <Box display="flex">
        <Grid container justifyContent="flex-start" style={{ marginTop: 20 }}>
          {ListStepper()}
        </Grid>
      </Box>
    </CustomProjectStyle>
  );
};
