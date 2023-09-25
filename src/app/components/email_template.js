import * as React from "react";

/**
 * Represents email template
 * @param {string} name
 * @param {string} dateOfBirth
 * @param {string} phoneNumber
 * @param {string} whatsAppNumber
 * @param {string} email
 * @param {string} language
 * @param {string} courseName
 */

export const EmailTemplate = ({
  name,
  dateOfBirth,
  phoneNumber,
  whatsAppNumber,
  email,
  language,
  courseName,
}) => (
  <center
    style={{
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      width: "100%",
      tableLayout: "fixed",
      backgroundColor: "#f0f0f0",
      paddingBottom: 60,
    }}
  >
    <table
      style={{
        borderSpacing: 0,
        backgroundColor: "#ffffff",
        margin: "0 auto",
        width: "100%",
        maxWidth: 600,
        color: "#0d1b36",
      }}
      width="100%"
    >
      {/* heading Section */}
      <tbody>
        <tr>
          <th>
            <h1
              style={{
                textAlign: "center",
                padding: "20px 0 20px 0",
                fontWeight: 600,
                color: "#3A3AE8",
              }}
            >
              New Entry
            </h1>
          </th>
          {/* Personal Information Section */}
        </tr>
        <tr>
          <td style={{ padding: 0 }}>
            <table
              style={{ borderSpacing: 0, padding: "20px 0 20px 80px" }}
              width="100%"
            >
              <tbody>
                <tr>
                  <th>
                    <h2 style={{ fontWeight: 500 }}>Informação pessoal</h2>
                  </th>
                </tr>
                <tr>
                  <td style={{ padding: 0, paddingBottom: 40 }}>
                    <h3
                      style={{
                        textTransform: "capitalize",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      NOME COMPLETO
                    </h3>
                    <p style={{ fontSize: 18, fontWeight: 500 }}>{name}</p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 0, paddingBottom: 40 }}>
                    <h3
                      style={{
                        textTransform: "capitalize",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      Course Name
                    </h3>
                    <p style={{ fontSize: 18, fontWeight: 500 }}>
                      {courseName}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 0, paddingBottom: 40 }}>
                    <h3
                      style={{
                        textTransform: "capitalize",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      DATA DE NASCIMENTO
                    </h3>
                    <p style={{ fontSize: 18, fontWeight: 500 }}>
                      {dateOfBirth}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 0, paddingBottom: 40 }}>
                    <h3
                      style={{
                        textTransform: "capitalize",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      NÚMERO DO TELEFONE
                    </h3>
                    <p style={{ fontSize: 18, fontWeight: 500 }}>
                      {phoneNumber}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 0, paddingBottom: 40 }}>
                    <h3
                      style={{
                        textTransform: "capitalize",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      NÚMERO DO WHATSAPP
                    </h3>
                    <p style={{ fontSize: 18, fontWeight: 500 }}>
                      {whatsAppNumber}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 0, paddingBottom: 40 }}>
                    <h3
                      style={{
                        textTransform: "capitalize",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      E-MAIL
                    </h3>
                    <p style={{ fontSize: 18, fontWeight: 500 }}>{email}</p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 0, paddingBottom: 40 }}>
                    <h3
                      style={{
                        textTransform: "capitalize",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      LÍNGUA MATERNA
                    </h3>
                    <p style={{ fontSize: 18, fontWeight: 500 }}>{language}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </center>
);
