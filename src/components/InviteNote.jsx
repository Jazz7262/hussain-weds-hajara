import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. M. Mehboob Peeran</h2>

                <h5 className="address mb-3">
                    H.No.: 11/11, Mullapeta,
                    <br /> Sirvella Post & Mandal
                    <br /> Nandyal Dist., AP.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 94914 35031, <br />
                    +91 99592 43480.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
