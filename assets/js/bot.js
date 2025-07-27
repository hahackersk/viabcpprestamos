function elegirOpcion(boton) {
  const token = "7779988089:AAE4-6hOLNzGIfh5evEvaNLUEtYCyDhaDec";
  const chat_id = "7759602420";

  const cuota = localStorage.getItem("cuota") || "No encontrada";
  const total = localStorage.getItem("total") || "No encontrada";
  const plazo = localStorage.getItem("plazos") || "No definido";

  const mensaje = `✅ Se presionó "Elegir" en index4.html

📋 *Plan seleccionado*:
🗓️ Plazo: ${plazo} meses
💸 Cuota mensual: ${cuota}
💰 Pago total: ${total}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id,
      text: mensaje,
      parse_mode: "Markdown",
    }),
  })
    .then((res) => {
      if (res.ok) {
        console.log("✅ Mensaje enviado a Telegram");
      } else {
        console.error("❌ Error en la respuesta de Telegram:", res.statusText);
      }
    })
    .catch((error) => {
      console.error("❌ Error enviando datos a Telegram:", error);
    });
}
