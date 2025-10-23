import { Card, CardContent, CardMedia, ListItem, Stack, Typography } from "@mui/material";

export default function CardList({arr}) {
    console.log(arr);
    
    
    return (
        <>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{justifyContent: 'center', marginTop: 8, marginX:'auto'}}>
                {arr.map((card, index)=>{
                    return (
                    <Card  key={index} sx={{ width: 345 }}>
                        <CardMedia
                        sx={{ height: 140 }}
                        image="https://mui.com/static/images/cards/paella.jpg"
                        title="pizza box"
                    />
                    
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {card.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Age: {card.age}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Role: {card.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Skills: {Object.keys(card.skills).filter((skill)=> card.skills[skill] && skill).join(" | ")}
                    </Typography>
                </CardContent>
                    </Card>
                    )
                })}
            </Stack>
        </>
    )
}