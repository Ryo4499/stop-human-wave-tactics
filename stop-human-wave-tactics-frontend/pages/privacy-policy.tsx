import { Grid, Box, Typography, ListItemText } from "@mui/material"

export default function App() {
        const site_text = "運営者: AR44\n連作先: ryo.p4499@gmail.com\n制定日: 2022年10月10日\n最終改定日: 2022年10月10日"
        const site_info = site_text.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)

        const google_ad_text = `
        当サイトでは、第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は「広告 – ポリシーと規約 – Google」をご覧ください。

        また当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。
        この規約に関しては、下記のURLをクリックしてください。
        `
        const google_ad_url = "https://support.google.com/adspolicy/answer/54818?hl=ja"
        const google_ad_info = google_ad_text.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)

        const google_analysis_text = `
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。

        このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
        このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
        この規約に関しては、下記のURLをクリックしてください。
        `
        const google_analysis_info = google_analysis_text.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)
        const google_analysis_url = "https://marketingplatform.google.com/about/analytics/terms/jp/"

        const copy_right_text = `
        当サイトの記事について、著作権は放棄しておりません。当サイトに存在する、文章・画像・動画等の著作物の情報を無断転載することを禁止します。引用の範囲を超えるものについては、法的処置を行います。
        転載を希望される方は、「お問い合わせ」よりご連絡をお願いします。

        また、当サイトは著作権の侵害を目的とするものではありません。使用している版権物の知的所有権はそれぞれの著作者・団体に帰属しております。
        著作権や肖像権に関して問題がありましたら御連絡下さい。著作権所有者様からの警告及び修正・撤去のご連絡があった場合は迅速に対処または削除致します。
        `
        const copy_right_info = copy_right_text.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)

        const link_free_text = `
        当サイトは基本的にリンクフリーですが、画像への直リンクや、インラインフレームの使用はお断り致します。
        `
        const link_free_info = link_free_text.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)

        const disclaimer_text = `
        当サイトは、アフィリエイトプログラムを使って商品を紹介しており、直接の販売は行っておりません。商品に関するお問い合わせは、販売店様のほうに直接ご連絡くださいますようお願い致します。当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。また、リンク先サイトの正確性や合法性、その内容について一切保証するものではありません。当サイトに関する記事は、個人的な主観をもとに書いており、すべての人に当てはまるというものではありません。商品やサービスのご購入に関する最終的な判断はご自身の責任でお願い致します。

        当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、必ずしもそれらの正確性や安全性等を保証するものではありません。誤情報が入り込んだり、情報が古くなっていることもございます。万が一、当サイトをご利用することで発生したトラブルに関しては一切の責任を負いかねます。あらかじめご了承くださいますようお願い致します。

        また本免責事項、および当サイトに掲載しているすべての記事は、予告なしに変更・削除されることがあります。 予めご了承下さい。
        `
        const disclaimer_info = disclaimer_text.split("\n").map((line, key) => <span key={key}>{line}<br /></span>)

        return (
                <Grid container direction="column">
                        <Box>
                                <ListItemText primary={"サイト運営情報"} secondary={site_info} />
                        </Box>
                        <Box>
                                <ListItemText primary={"広告の配信について"} secondary={google_ad_info} />
                                <a href={google_ad_url}>{google_ad_url}</a>
                        </Box>
                        <Box>
                                <ListItemText primary={"アクセス解析ツールについて"} secondary={google_analysis_info} />
                                <a href={google_analysis_url}>{google_analysis_url}</a>
                        </Box>
                        <Box>
                                <ListItemText primary={"著作権について"} secondary={copy_right_info} />
                        </Box>
                        <Box>
                                <ListItemText primary={"リンクについて"} secondary={link_free_info} />
                        </Box>
                        <Box>
                                <ListItemText primary={"免責事項"} secondary={disclaimer_info} />
                        </Box>
                </Grid>
        )
}
