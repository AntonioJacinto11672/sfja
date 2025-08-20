import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b pb-4 mb-6">
      {/* Logotipo */}
      <div className="flex items-center space-x-2">
        <img
          src="../../assets/logo.png" // 👉 substitui pelo path real do logotipo
          alt="SFJA Logo"
          className="w-16 h-16"
        />
        <div>
          <h1 className="text-lg font-bold uppercase">
            Proposta de Admissão ao Quadro Social
          </h1>
          <p className="text-sm text-gray-600">
            (Preencher de forma legível)
          </p>
        </div>
      </div>

      {/* Inscrição */}
      <div className="text-sm">
        <p>Inscrição ________________________</p>
        <p className="text-gray-500">(uso do sindicato)</p>
      </div>
    </div>
  )
}
