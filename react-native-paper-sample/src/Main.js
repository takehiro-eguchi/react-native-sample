import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button, Caption, Headline, Paragraph, Subheading, Title, Card, Avatar } from "react-native-paper";

export const Main = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Headline>Paper紹介</Headline>
                <Title>タイトル</Title>
                <Subheading>Typography</Subheading>
                <Paragraph>これが段落です。</Paragraph>
                <Paragraph>じゅげむじゅげむ　ごこうのすりきれ</Paragraph>
                <Caption>キャプションも書けます。</Caption>
                <Subheading>Button</Subheading>
                <Subheading>Card</Subheading>
                <Button>
                    普通のボタン(mode:text)
                </Button>
                <Button mode="contained">
                    containedなボタン
                </Button>
                <Button mode="outlined">
                    outlinedなボタン
                </Button>
                <Subheading>Card</Subheading>
                <Card> 
                    <Card.Cover source={require('../assets/zuisan.jpg')} />
                    <Card.Title 
                        title="ラーメン紀行 2日目"
                        subtitle="炎のラーメンチャンネル"
                        left={props => <Avatar.Text {...props} label="YN" />} />
                    <Card.Content>
                        <Paragraph>
                            とうとうこの伝説のお店にやってきました。
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions style={{justifyContent: 'flex-end'}}>
                        <Button>見ない</Button>
                        <Button mode="contained">見る</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
};