import { describe, expect, it } from "vitest";
import { units, whatsappUrl, mapsUrl } from "../lib/clinic";

describe("Contatos da clínica", () => {
  it("direciona Campo Grande ao WhatsApp fornecido", () => {
    expect(new URL(whatsappUrl(units[0].whatsapp)).pathname).toBe("/5521991597096");
  });
  it("direciona Bangu ao WhatsApp fornecido, não ao telefone fixo", () => {
    expect(new URL(whatsappUrl(units[1].whatsapp)).pathname).toBe("/5521973786882");
    expect(units[1].phone).toBe("(21) 2146-5709");
  });
  it("usa o endereço informado de Campo Grande para rotas", () => {
    expect(new URL(mapsUrl(units[0].address)).searchParams.get("query")).toBe("Estrada Santa Maria, 1844 - Campo Grande, Rio de Janeiro - RJ");
  });
  it("usa o endereço informado de Bangu para rotas", () => {
    expect(new URL(mapsUrl(units[1].address)).searchParams.get("query")).toBe("Rua Roque Barbosa, 661 - Bangu, Rio de Janeiro - RJ");
  });
});
import { whatsappUrl as wa } from "@/lib/clinic";
it("WhatsApp links use the site message", () => {
  const msg = "Olá! Vim pelo site e gostaria de agendar uma avaliação na Clínica Odontológica Bem Estar.";
  expect(decodeURIComponent(wa("5521991597096").split("text=")[1] ?? "")).toBe(msg);
  expect(decodeURIComponent(wa("5521973786882", "Clareamento").split("text=")[1] ?? "")).toBe(msg);
});
