import DOMPurify from 'isomorphic-dompurify';

export async function getServerSideProps({ query }) {
    const userHtml = query.q || "<em>Try ?q=<script>alert('xss')</script></em>";
    return { props: { userHtml } };
}

export default function Home({ userHtml }) {
    // --- TOGGLE: VULNERABLE vs SAFE ---

    // ❌ VULNERABLE (comment out the safe version below to demo this)
     const content = { __html: userHtml };

    // ✅ SAFE: sanitize on the server OR here
    //const content = { __html: DOMPurify.sanitize(userHtml) };

    return (
        <main style={{ fontFamily: "system-ui", padding: 24 }}>
            <h1>Next.js XSS Demo</h1>
            <p>Append <code>?q=&lt;script&gt;alert('xss')&lt;/script&gt;</code> to the URL</p>

            {/* --- TOGGLE: dangerouslySetInnerHTML to showcase risk/mitigation --- */}
            <div
                style={{ border: "1px solid #ccc", padding: 12, marginTop: 12 }}
                dangerouslySetInnerHTML={content}
            />
        </main>
    );
}
